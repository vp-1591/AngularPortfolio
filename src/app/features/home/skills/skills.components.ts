import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { SkillCategoryComponent } from './skill-category.component';
import { SectionCenterComponent } from '../../../shared/ui/section-center.component';

@Component({
  selector: 'skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section-center>
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
    </section-center>
  `,
  styles: [
    `
      :host {
        padding: 0, 80px;
      }
      .skills-content {
        display: flex;
        flex-direction: row;
        gap: 32px;
        align-items: stretch;
        width: 90%;
        justify-content: center;
      }
    `,
  ],
  imports: [HeadingComponent, SkillCategoryComponent, SectionCenterComponent],
})
export class SkillsComponent {}
