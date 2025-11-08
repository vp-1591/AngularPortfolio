import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card.component';
import { TextComponent } from '../../../shared/ui/text.component';

@Component({
  selector: 'skill-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<card class="skill-card">
    <img class="skill-icon" [src]="imageUri()" alt="Frontend" />
    <text type="Orbitron" class="title-skill">{{ title() }}</text>
    @for (skill of skills(); track $index) {
    <text type="Inter" class="tech-skill" [styles]="{ textAlign: 'center' }"> {{ skill }} </text>
    }
  </card>`,
  styles: [
    `
      :host {
        width: 20vw;
        display: flex;
        flex-direction: column;
      }
      .skill-icon {
        width: 44px;
        height: 44px;
        filter: drop-shadow(0px 0px 20px var(--primary-color));
      }
      .skill-card {
        align-items: center;
        gap: 12px;
        flex: 1;
      }
      .tech-skill {
        font-size: 14px;
      }
      .title-skill {
        font-size: 20px;
      }

      @media (max-width: 768px) {
        :host {
          width: 50%;
        }
        .skill-icon {
          width: 32px;
          height: 32px;
        }
        .tech-skill {
          font-size: 12px;
        }
        .title-skill {
          font-size: 18px;
        }
      }
    `,
  ],
  imports: [CardComponent, TextComponent],
})
export class SkillCategoryComponent {
  imageUri = input<string>('');
  title = input<string>('');
  skills = input<string[]>([]);
}
