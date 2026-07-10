import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  bullets: string[] = [
    'Delivered production features for 2 government enterprise portals (IWBMS & RETMS) used by 10,000+ registered stakeholders across Maharashtra.',
    'Architected an OTP-based login system (6-digit code, 5-min TTL, SMS gateway) using Node.js + JWT, removing password-only entry points to meet state security compliance.',
    'Designed a 3-tier RBAC system (Citizen → Samiti Approver → Department Admin) with dynamic route guards across 15+ protected screens and API endpoints.',
    'Built responsive Angular UIs with lazy loading and optimized API calls, cutting average screen-load time by ~25% across key modules.',
    'Integrated multi-step benefit-claim flows handling 500+ daily form submissions, with server-side validation and real-time status tracking.'
  ];
}
