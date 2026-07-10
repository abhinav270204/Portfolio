import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tier {
  name: string;
  scope: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  otpDigits = ['4', '2', '9', '0', '1', '7'];
  otpFilledCount = 0;
  otpVerified = false;
  activeTier = 0;

  tiers: Tier[] = [
    { name: 'citizen', scope: 'submit & track claims' },
    { name: 'samiti_approver', scope: 'review & approve' },
    { name: 'department_admin', scope: 'full system access' }
  ];

  private timers: ReturnType<typeof setTimeout>[] = [];

  ngOnInit(): void {
    this.runSequence();
  }

  private runSequence(): void {
    this.otpFilledCount = 0;
    this.otpVerified = false;
    this.activeTier = 0;

    for (let i = 1; i <= this.otpDigits.length; i++) {
      this.timers.push(setTimeout(() => (this.otpFilledCount = i), 300 * i));
    }
    this.timers.push(setTimeout(() => (this.otpVerified = true), 300 * this.otpDigits.length + 400));

    const tierStart = 300 * this.otpDigits.length + 1000;
    this.tiers.forEach((_, i) => {
      this.timers.push(setTimeout(() => (this.activeTier = i + 1), tierStart + i * 700));
    });

    this.timers.push(setTimeout(() => this.runSequence(), tierStart + this.tiers.length * 700 + 2200));
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
  }
}
