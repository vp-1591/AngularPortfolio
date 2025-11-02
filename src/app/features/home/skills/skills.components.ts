import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { SkillCategoryComponent } from './skill-category.component';

@Component({
  selector: 'skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="center">
      <heading>Skills</heading>
      <div class="skills-content">
        <skill-category
          title="Frontend"
          imageUri="assets/skills/code.svg"
          [skills]="['React / Next.js', 'Angular', 'TypeScript', 'Tailwind CSS']"
        />
        <skill-category
          title="Mobile"
          imageUri="assets/skills/mobile.svg"
          [skills]="['React Native', 'State management (Redux)', 'App Publishing (EAS)']"
        />
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        padding: 0, 80px;
      }
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 50px;
      }
      .skills-content {
        display: flex;
        flex-direction: row;
        gap: 32px;
        align-items: stretch;
        width: 100%;
        justify-content: center;
      }
    `,
  ],
  imports: [HeadingComponent, SkillCategoryComponent],
})
export class SkillsComponent {}
