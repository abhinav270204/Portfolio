import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  name: string;
  org: string;
  status: string;
  description: string;
  stack: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 'proj_01',
      name: 'IWBMS',
      org: 'Maharashtra Government Labor Department',
      status: 'in production',
      description:
        'Integrated Workers\' Benefit Management System handling registration, benefit claims, and multi-tier approvals for laborers across the state. Built the OTP auth layer, RBAC route guards, and the claim-submission flow.',
      stack: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'JWT']
    },
    {
      id: 'proj_02',
      name: 'RETMS',
      org: 'Brihanmumbai Municipal Corporation (BMC)',
      status: 'in production',
      description:
        'Enterprise tracking and management system for BMC, serving thousands of registered stakeholders. Focused on lazy-loaded Angular modules and API response time, cutting screen-load time ~25%.',
      stack: ['Angular', 'NestJS', 'Fastify', 'PostgreSQL', 'Prime NG']
    }
  ];
}
