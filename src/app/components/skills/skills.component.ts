import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'security' | 'database' | 'devops';
  categoryLabel: string;
  level: string;
  score: number;
  experience: string;
  usedIn: string[];
  capabilities: string[];
  icon: string;
}

export interface ArchitectureLayer {
  tier: string;
  title: string;
  description: string;
  skills: string[];
  badgeColor: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  searchQuery: string = '';
  activeCategory: string = 'all';
  viewMode: 'grid' | 'architecture' = 'grid';

  categories = [
    { id: 'all', label: 'All Stack', count: 18 },
    { id: 'frontend', label: 'Frontend', count: 4 },
    { id: 'backend', label: 'Backend & Real-Time', count: 5 },
    { id: 'security', label: 'Security & Auth', count: 3 },
    { id: 'database', label: 'Databases & ORM', count: 4 },
    { id: 'devops', label: 'Tools & DevOps', count: 2 }
  ];

  skills: SkillItem[] = [
    {
      id: 'angular',
      name: 'Angular (v15 - v18)',
      category: 'frontend',
      categoryLabel: 'Frontend Architecture',
      level: 'Production Grade',
      score: 95,
      experience: '2+ Years Production',
      usedIn: ['IWBMS Govt Portal', 'RETMS BMC Portal', 'Portfolio'],
      capabilities: [
        'Standalone components & signals',
        'Lazy-loaded feature routing & modules',
        'Custom route guards & HTTP interceptors',
        'RxJS reactive state & stream pipelines'
      ],
      icon: '🅰️'
    },
    {
      id: 'springboot',
      name: 'Spring Boot & Java',
      category: 'backend',
      categoryLabel: 'Enterprise Backend',
      level: 'Advanced',
      score: 90,
      experience: 'Production & Systems',
      usedIn: ['SmartPark Backend', 'Enterprise Microservices'],
      capabilities: [
        'RESTful controller design & OpenAPI',
        'WebSocket real-time bidirectional messaging',
        'Spring Security & JWT filter chains',
        'JPA / Hibernate repository layer'
      ],
      icon: '☕'
    },
    {
      id: 'nodejs',
      name: 'Node.js & Express.js',
      category: 'backend',
      categoryLabel: 'API & Microservices',
      level: 'Production Grade',
      score: 94,
      experience: '2+ Years Production',
      usedIn: ['IWBMS Labor Dept', 'PackersMart MVP', 'Expense Tracker', 'Shortly'],
      capabilities: [
        'High-concurrency async event-loop handlers',
        'Modular REST API architectures',
        'OTP generation & SMS gateway integration',
        'Custom error handling & security middleware'
      ],
      icon: '🟢'
    },
    {
      id: 'nestjs',
      name: 'NestJS & Fastify',
      category: 'backend',
      categoryLabel: 'Enterprise Framework',
      level: 'Production Grade',
      score: 88,
      experience: 'Production BMC System',
      usedIn: ['RETMS BMC Portal'],
      capabilities: [
        'Dependency injection & modular architecture',
        'High-throughput Fastify HTTP adapter',
        'Sub-second API response optimization',
        'Decorators, pipes & validation guards'
      ],
      icon: '🦁'
    },
    {
      id: 'websockets',
      name: 'WebSockets & Real-Time',
      category: 'backend',
      categoryLabel: 'Real-Time Streaming',
      level: 'Advanced',
      score: 88,
      experience: 'IoT & Systems',
      usedIn: ['SmartPark IoT Backend'],
      capabilities: [
        'Bidirectional live slot synchronization',
        'STOMP protocol messaging',
        'Real-time status broadcast feeds',
        'Connection heartbeat & reconnect resilience'
      ],
      icon: '⚡'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'frontend',
      categoryLabel: 'Core Language',
      level: 'Production Grade',
      score: 95,
      experience: 'Core Development',
      usedIn: ['IWBMS', 'RETMS', 'Campus Notice Board', 'Portfolio'],
      capabilities: [
        'Strict type safety & generic utilities',
        'Interface modeling & type guards',
        'Async promise resolution & decorators',
        'Robust compile-time contract enforcement'
      ],
      icon: '🔷'
    },
    {
      id: 'nextjs',
      name: 'Next.js & React',
      category: 'frontend',
      categoryLabel: 'Full-Stack Web',
      level: 'Advanced',
      score: 87,
      experience: 'Full-Stack Applications',
      usedIn: ['Campus Notice Board', 'Expense Tracker', 'Schools App'],
      capabilities: [
        'Server-side rendering (SSR) & API routes',
        'Prisma ORM database integration',
        'React functional hooks & state control',
        'Responsive component design & Tailwind'
      ],
      icon: '⚛️'
    },
    {
      id: 'rbac',
      name: 'RBAC (Role-Based Access)',
      category: 'security',
      categoryLabel: 'Security Architecture',
      level: 'Production Grade',
      score: 96,
      experience: 'Govt Enterprise Security',
      usedIn: ['IWBMS (10k+ users)', 'PackersMart Platform'],
      capabilities: [
        '3-tier role hierarchy (Citizen → Approver → Admin)',
        '15+ protected route screens & API barriers',
        'Dynamic granular permission matrices',
        'Audit logging & action traceability'
      ],
      icon: '🛡️'
    },
    {
      id: 'jwt-otp',
      name: 'JWT & OTP Auth Systems',
      category: 'security',
      categoryLabel: 'Authentication',
      level: 'Production Grade',
      score: 95,
      experience: 'Govt Enterprise Security',
      usedIn: ['IWBMS Govt Portal', 'PackersMart MVP', 'SmartPark'],
      capabilities: [
        '6-digit OTP generation with 5-min TTL',
        'SMS gateway webhook integration',
        'Stateless JWT access & refresh tokens',
        'Passwordless verified entry mechanisms'
      ],
      icon: '🔑'
    },
    {
      id: 'sec-guards',
      name: 'API Guards & Interceptors',
      category: 'security',
      categoryLabel: 'System Defense',
      level: 'Production Grade',
      score: 92,
      experience: 'Enterprise Portals',
      usedIn: ['IWBMS', 'RETMS BMC', 'SmartPark'],
      capabilities: [
        'Bearer token automated injection',
        'Session expiry detection & silent refresh',
        'CORS policies & payload sanitization',
        'Rate limiting & anti-tampering guards'
      ],
      icon: '🔒'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'database',
      categoryLabel: 'Relational Database',
      level: 'Production Grade',
      score: 92,
      experience: '2+ Years Production',
      usedIn: ['IWBMS Maharashtra', 'RETMS BMC', 'SmartPark'],
      capabilities: [
        'Relational schema design & foreign key trees',
        'Complex JOIN queries & indexing tuning',
        'ACID compliant transaction boundaries',
        'High-load data integrity for 10,000+ users'
      ],
      icon: '🐘'
    },
    {
      id: 'mongodb',
      name: 'MongoDB & Atlas',
      category: 'database',
      categoryLabel: 'NoSQL Database',
      level: 'Advanced',
      score: 90,
      experience: 'Full-Stack Applications',
      usedIn: ['PackersMart MVP', 'Expense Tracker', 'Shortly'],
      capabilities: [
        'Document modeling & schema validation',
        'Aggregation pipelines & metric grouping',
        'MongoDB Atlas cloud clustering',
        'Indexing on high-frequency lookup fields'
      ],
      icon: '🍃'
    },
    {
      id: 'prisma',
      name: 'Prisma ORM & MySQL',
      category: 'database',
      categoryLabel: 'Type-Safe ORM',
      level: 'Advanced',
      score: 88,
      experience: 'Full-Stack Systems',
      usedIn: ['Campus Notice Board', 'Schools App'],
      capabilities: [
        'Database-level priority sorting & indexing',
        'Type-safe query builder client',
        'Automated database migrations',
        'Relational nested reads and writes'
      ],
      icon: '💎'
    },
    {
      id: 'primeng-ui',
      name: 'PrimeNG & UI Systems',
      category: 'frontend',
      categoryLabel: 'Enterprise UI',
      level: 'Production Grade',
      score: 92,
      experience: 'BMC Enterprise Portal',
      usedIn: ['RETMS BMC Portal'],
      capabilities: [
        'High-density data tables & filtering',
        'Dynamic modal dialogs & form overlays',
        'Custom accessible design theme systems',
        'Optimized DOM rendering for large datasets'
      ],
      icon: '🎨'
    },
    {
      id: 'git',
      name: 'Git & GitHub Workflows',
      category: 'devops',
      categoryLabel: 'Version Control',
      level: 'Production Grade',
      score: 93,
      experience: 'Team & Open-Source',
      usedIn: ['All Production & Open-Source Repos'],
      capabilities: [
        'Branching strategies & clean commit hygiene',
        'Pull request code reviews & conflict resolution',
        'Continuous integration trigger workflows',
        'Release tagging & repo maintenance'
      ],
      icon: '🐙'
    },
    {
      id: 'postman',
      name: 'Postman & API Testing',
      category: 'devops',
      categoryLabel: 'API Tooling',
      level: 'Production Grade',
      score: 92,
      experience: 'API Development',
      usedIn: ['IWBMS', 'RETMS', 'SmartPark', 'PackersMart'],
      capabilities: [
        'Automated test assertions on HTTP codes & payload',
        'Environment variables & bearer token automation',
        'Mock server endpoints for frontend decoupling',
        'API collection documentation & export'
      ],
      icon: '🚀'
    },
    {
      id: 'rest-api',
      name: 'RESTful API Engineering',
      category: 'backend',
      categoryLabel: 'API Architecture',
      level: 'Production Grade',
      score: 96,
      experience: 'All Production Systems',
      usedIn: ['IWBMS', 'RETMS', 'SmartPark', 'PackersMart'],
      capabilities: [
        'Strict REST semantics & HTTP status design',
        'Consistent error envelopes & payload schemas',
        'Pagination, sorting & field filtering',
        'Stateless scalability across cloud nodes'
      ],
      icon: '🌐'
    },
    {
      id: 'cloud-deploy',
      name: 'Cloud & Vercel Deployment',
      category: 'database',
      categoryLabel: 'Cloud Infrastructure',
      level: 'Advanced',
      score: 89,
      experience: 'Production & Demos',
      usedIn: ['Shortly', 'Campus Notice Board', 'Portfolio'],
      capabilities: [
        'Zero-config edge deployment pipelines',
        'Environment secrets & production SSL setup',
        'Serverless function routes & API handlers',
        'Global CDN caching & asset distribution'
      ],
      icon: '☁️'
    }
  ];

  selectedSkill: SkillItem = this.skills[0];

  architectureLayers: ArchitectureLayer[] = [
    {
      tier: 'TIER 01',
      title: 'Client Presentation Layer',
      description: 'Responsive, accessible, lazy-loaded web interfaces with enterprise UX & reactive state.',
      skills: ['Angular v18', 'TypeScript', 'Next.js', 'PrimeNG', 'HTML5 / SCSS', 'Tailwind CSS'],
      badgeColor: '#38bdf8'
    },
    {
      tier: 'TIER 02',
      title: 'API Gateway & Security Layer',
      description: 'Access control protocols, OTP verification, stateless JWT tokens, and 3-tier RBAC route guards.',
      skills: ['3-Tier RBAC', 'JWT Token Engine', 'OTP SMS Gateway', 'HTTP Interceptors', 'Route Guards'],
      badgeColor: '#35d999'
    },
    {
      tier: 'TIER 03',
      title: 'Business Logic & Real-Time Microservices',
      description: 'High-throughput APIs, bidirectional WebSocket telemetry, and modular enterprise backends.',
      skills: ['Spring Boot', 'Java', 'Node.js', 'Express.js', 'NestJS', 'Fastify', 'WebSockets (STOMP)'],
      badgeColor: '#818cf8'
    },
    {
      tier: 'TIER 04',
      title: 'Persistence & Cloud Database Layer',
      description: 'Relational data modeling, indexed querying, document aggregation, and cloud Atlas databases.',
      skills: ['PostgreSQL', 'MongoDB Atlas', 'MySQL / MariaDB', 'Prisma ORM', 'JPA / Hibernate'],
      badgeColor: '#f2a93b'
    },
    {
      tier: 'TIER 05',
      title: 'DevOps, Tooling & Testing',
      description: 'Version control, automated API regression testing, continuous edge cloud deployment.',
      skills: ['Git & GitHub', 'Postman API Testing', 'Vercel Edge Cloud', 'VS Code / IntelliJ', 'Agile / Scrum'],
      badgeColor: '#e15554'
    }
  ];

  get filteredSkills(): SkillItem[] {
    let list = this.skills;

    if (this.activeCategory !== 'all') {
      list = list.filter(s => s.category === this.activeCategory);
    }

    if (this.searchQuery && this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(
        s =>
          s.name.toLowerCase().includes(q) ||
          s.categoryLabel.toLowerCase().includes(q) ||
          s.capabilities.some(c => c.toLowerCase().includes(q)) ||
          s.usedIn.some(u => u.toLowerCase().includes(q))
      );
    }

    return list;
  }

  setCategory(catId: string): void {
    this.activeCategory = catId;
  }

  selectSkill(skill: SkillItem): void {
    this.selectedSkill = skill;
  }

  setViewMode(mode: 'grid' | 'architecture'): void {
    this.viewMode = mode;
  }

  clearSearch(): void {
    this.searchQuery = '';
  }
}
