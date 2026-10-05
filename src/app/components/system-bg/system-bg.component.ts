import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  baseAlpha: number;
}

@Component({
  selector: 'app-system-bg',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="system-bg-wrapper">
      <div class="ambient-glow glow-1"></div>
      <div class="ambient-glow glow-2"></div>
      <div class="ambient-glow glow-3"></div>
      <div class="cyber-grid-overlay"></div>
      <canvas #canvas class="particle-canvas"></canvas>
    </div>
  `,
  styleUrl: './system-bg.component.scss'
})
export class SystemBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number | null = null;
  private particles: Particle[] = [];
  private mouse = { x: -1000, y: -1000, radius: 140 };
  private isBrowser: boolean;
  private resizeObserver: ResizeObserver | null = null;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.resizeCanvas();
    this.initParticles();
    this.animate();

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.resizeCanvas();
      });
      this.resizeObserver.observe(document.body);
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  @HostListener('window:mouseout')
  onMouseLeave() {
    this.mouse.x = -1000;
    this.mouse.y = -1000;
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }

    if (this.particles.length === 0 || Math.abs(this.particles.length - this.getOptimalParticleCount(width)) > 20) {
      this.initParticles();
    }
  }

  private getOptimalParticleCount(width: number): number {
    if (width < 768) return 30;
    if (width < 1200) return 45;
    return 65;
  }

  private initParticles(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const count = this.getOptimalParticleCount(width);
    const colors = [
      '#35d999', // Mint / Verified
      '#38bdf8', // Cyan / Network
      '#818cf8', // Indigo / Server
      '#f2a93b'  // Amber / Security
    ];

    this.particles = [];
    for (let i = 0; i < count; i++) {
      const baseAlpha = 0.2 + Math.random() * 0.4;
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1.2 + Math.random() * 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        pulseSpeed: 0.01 + Math.random() * 0.02
      });
    }
  }

  private animate = (): void => {
    if (!this.ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    this.ctx.clearRect(0, 0, width, height);

    const maxDistance = 110;
    const count = this.particles.length;

    // Draw connecting lines between close particles (network graph)
    for (let i = 0; i < count; i++) {
      const p1 = this.particles[i];

      // Update position
      p1.x += p1.vx;
      p1.y += p1.vy;

      // Bounce off screen borders gently
      if (p1.x < 0 || p1.x > width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > height) p1.vy *= -1;

      // Subtle pulse
      p1.alpha = p1.baseAlpha + Math.sin(Date.now() * p1.pulseSpeed * 0.05) * 0.15;

      // Mouse interactivity
      const dxMouse = this.mouse.x - p1.x;
      const dyMouse = this.mouse.y - p1.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      if (distMouse < this.mouse.radius) {
        const force = (this.mouse.radius - distMouse) / this.mouse.radius;
        const angle = Math.atan2(dyMouse, dxMouse);
        p1.x -= Math.cos(angle) * force * 1.2;
        p1.y -= Math.sin(angle) * force * 1.2;

        // Draw interactive connection to mouse
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(53, 217, 153, ${(1 - distMouse / this.mouse.radius) * 0.3})`;
        this.ctx.lineWidth = 0.8;
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.stroke();
      }

      // Draw node connection links
      for (let j = i + 1; j < count; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const lineAlpha = (1 - dist / maxDistance) * 0.14;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(139, 150, 166, ${lineAlpha})`;
          this.ctx.lineWidth = 0.6;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }

      // Draw particle node
      this.ctx.beginPath();
      this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p1.color;
      this.ctx.globalAlpha = Math.max(0.1, Math.min(1, p1.alpha));
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
