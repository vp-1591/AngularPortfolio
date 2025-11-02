import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';
import { TagComponent } from './tag.components';
import { CardComponent } from '../../../shared/ui/card.component';

@Component({
  selector: 'project',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <card style="background-color: var(--blur-color);">
      <div class="project-image-container">
        <img class="project-image" [src]="imageUri" alt="Project Image" />
      </div>
      <text type="Orbitron" [styles]="{ fontSize: '20px', color: 'var(--primary-color)' }">{{
        title
      }}</text>
      <text type="Inter" [styles]="{ fontSize: '16px',}">{{ description }}</text>
      <div class="project-tags">
        @for (tag of tags; track $index) {
        <tag>{{ tag }}</tag>
        }
      </div>
      @if (link) {
      <a [href]="link" target="_blank" rel="noopener noreferrer" class="link-container">
        <text type="Inter" [styles]="{ fontSize: '16px', color: 'var(--primary-color)' }"
          >View Project</text
        >
        <img src="assets/projects/arrow.svg" alt="Arrow Icon" />
      </a>
      } @else {
      <div class="spacer"></div>
      }
    </card>
  `,
  styles: [
    `
      .project-tags {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
      .project-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 4px;
      }
      .project-image-container {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
      }
      .project-image {
        width: 100%;
        height: 100%;
      }
      .spacer {
        height: 18px;
      }
      .link-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        text-decoration: none;
      }
    `,
  ],
  imports: [TextComponent, TagComponent, CardComponent],
})
export class ProjectComponent {
  @Input() imageUri!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() tags: string[] = [];
  @Input() link?: string;
}
