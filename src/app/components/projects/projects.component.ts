import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: string;
  name: string;
  org: string;
  category: 'enterprise' | 'featured' | 'backend';
  status: string;
  statusType: 'production' | 'live' | 'featured' | 'system' | 'open-source';
  description: string;
  highlights?: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeFilter: string = 'all';

  categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured & Full-Stack' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'enterprise', label: 'Government & Enterprise' }
  ];

  projects: Project[] = [
    {
      id: 'proj_01',
      name: 'IWBMS',
      org: 'Maharashtra Government Labor Department',
      category: 'enterprise',
      status: 'in production',
      statusType: 'production',
      description:
        'Integrated Workers\' Benefit Management System handling registration, benefit claims, and multi-tier approvals for laborers across Maharashtra. Built the OTP auth layer, RBAC route guards, and claim-submission flow.',
      highlights: ['3-tier approval hierarchy', 'OTP SMS gateway auth', '10,000+ registered workers'],
      stack: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'JWT']
    },
    {
      id: 'proj_02',
      name: 'RETMS',
      org: 'Brihanmumbai Municipal Corporation (BMC)',
      category: 'enterprise',
      status: 'in production',
      statusType: 'production',
      description:
        'Enterprise tracking and management system for BMC municipal operations. Architected lazy-loaded Angular modules and optimized database queries, reducing screen-load latency by ~25%.',
      highlights: ['Lazy-loaded modular UI', 'Sub-second API responses', 'Municipal stakeholder portal'],
      stack: ['Angular', 'NestJS', 'Fastify', 'PostgreSQL', 'PrimeNG']
    },
    {
      id: 'proj_03',
      name: 'PackersMart Platform MVP',
      org: 'Full-Stack Logistics & Lead Engine',
      category: 'featured',
      status: 'featured mvp',
      statusType: 'featured',
      description:
        'Full-stack logistics platform implementing complete Lead-to-Booking workflow with customer onboarding, 6-digit OTP phone verification, automated algorithmic lead quality scoring, rule-based transporter matching, and a real-time Admin Management Dashboard.',
      highlights: ['6-digit OTP verification', 'Automated lead scoring algorithm', 'Real-time admin metrics dashboard'],
      stack: ['Node.js', 'Express', 'MongoDB', 'JWT / OTP', 'REST API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/abhinav270204/packersmart-mvp'
    },
    {
      id: 'proj_04',
      name: 'SmartPark Backend',
      org: 'Real-Time IoT Parking Management',
      category: 'backend',
      status: 'system backend',
      statusType: 'system',
      description:
        'Robust, high-concurrency Spring Boot backend for smart parking infrastructure. Powered by WebSockets for live bidirectional slot occupancy synchronization, Spring Security with JWT authentication, and role-guarded administrative controls.',
      highlights: ['Bidirectional WebSocket feeds', 'Real-time slot allocation', 'Role-based admin security'],
      stack: ['Java', 'Spring Boot', 'WebSocket', 'REST APIs', 'PostgreSQL', 'Spring Security'],
      githubUrl: 'https://github.com/abhinav270204/SmartPark-Backend'
    },
    {
      id: 'proj_05',
      name: 'Campus Notice Board',
      org: 'Institutional Announcement Hub',
      category: 'featured',
      status: 'live demo',
      statusType: 'live',
      description:
        'Centralized digital circular and announcement system for educational institutions. Implements database-level priority ordering with pulsing urgent indicators, category filtering, and role-based notice publishing workflows.',
      highlights: ['DB-level priority sorting', 'Urgent pulsing alert badges', 'Categorized notice streams'],
      stack: ['Next.js', 'TypeScript', 'Prisma ORM', 'MariaDB', 'Vercel'],
      githubUrl: 'https://github.com/abhinav270204/notice-board',
      demoUrl: 'https://notice-board-nine-omega.vercel.app'
    },
    {
      id: 'proj_06',
      name: 'Shortly — URL Shortener',
      org: 'Link Management & Analytics Service',
      category: 'featured',
      status: 'live demo',
      statusType: 'live',
      description:
        'High-performance URL shortener application supporting custom vanity slugs, instant redirection routing, comprehensive click analytics tracking, and a sleek modern responsive interface.',
      highlights: ['Custom slug generation', 'Click & traffic analytics', 'Fast redirect routing engine'],
      stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
      githubUrl: 'https://github.com/abhinav270204/url-shortener',
      demoUrl: 'https://url-shortener-eta-blush.vercel.app'
    },
    {
      id: 'proj_07',
      name: 'Expense Tracker',
      org: 'Full-Stack Financial Dashboard',
      category: 'featured',
      status: 'open source',
      statusType: 'open-source',
      description:
        'Full-stack personal finance tracker providing visual income vs. expense analytics, categorized transaction auditing, and seamless cloud synchronization with MongoDB Atlas.',
      highlights: ['Real-time expense categorization', 'Interactive financial overview', 'MongoDB Atlas cloud sync'],
      stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Chart.js'],
      githubUrl: 'https://github.com/abhinav270204/expense-tracker'
    },
    {
      id: 'proj_08',
      name: 'Schools Management Portal',
      org: 'Interactive Institutional Directory',
      category: 'featured',
      status: 'live demo',
      statusType: 'live',
      description:
        'Dynamic school directory web application featuring instant live search, multi-criteria filtering, structured academic profile cards, and responsive layout optimization.',
      highlights: ['Instant client-side search', 'Dynamic multi-attribute filtering', 'Fast responsive UI'],
      stack: ['JavaScript', 'React', 'CSS3', 'Vercel'],
      githubUrl: 'https://github.com/abhinav270204/schools-app',
      demoUrl: 'https://schools-app-dusky.vercel.app'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(category: string) {
    this.activeFilter = category;
  }
}
