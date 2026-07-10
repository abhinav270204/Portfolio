import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  key: string;
  values: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    { key: 'frontend', values: ['Angular', 'Prime NG', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
    { key: 'backend', values: ['Node.js', 'Express.js', 'Fastify', 'NestJS', 'REST APIs', 'JWT', 'OTP Auth'] },
    { key: 'database', values: ['PostgreSQL', 'MySQL'] },
    { key: 'concepts', values: ['RBAC', 'MVC', 'Agile/Scrum', 'State Management', 'Debugging'] },
    { key: 'tooling', values: ['Git', 'GitHub', 'VS Code', 'Postman'] }
  ];
}
