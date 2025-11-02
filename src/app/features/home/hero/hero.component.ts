import { Component, inject } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';
import { ButtonComponent } from '../../../shared/ui/button.component';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'app-hero',
  template: `
    <div class="center">
      <div class="hero-head">
        <text [styles]="{ fontSize: '92px', textAlign: 'center' }" type="Orbitron"
          >Vadym Abrosimov</text
        >
        <div class="title">
          <text [styles]="{ color: 'var(--primary-color)' }">FRONTEND</text
          ><text [styles]="{ fontWeight: 300 }" type="Inter">DEVELOPER</text>
        </div>
      </div>
      <div class="hero-description">
        <text [styles]="{ fontSize: '24px', textAlign: 'center' }" type="Inter">
          Passionate Frontend Developer focused on building fast, responsive, and visually engaging
          web experiences.
        </text>
      </div>
      <div class="hero-buttons">
        <app-button class="glow" variant="primary" type="button" (click)="scrollTo('projects')">
          <text [styles]="{ fontWeight: 600 }" type="Inter">View My Work</text>
        </app-button>
        <a
          href="assets/Abrosimov_CV_Frontend.pdf"
          download
          class="button-link-style"
          aria-label="Download"
        >
          <app-button variant="secondary" type="button"
            ><text type="Inter">Download CV</text></app-button
          >
        </a>
      </div>
    </div>
  `,
  imports: [TextComponent, ButtonComponent],
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 40px;
      }
      .title {
        font-size: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 12px;
        width: 100%;
      }
      .hero-head {
        flex-direction: column;
        display: flex;
        gap: 16px;
      }
      .hero-description {
        padding: 0 15vw;
      }
      .hero-buttons {
        display: flex;
        flex-direction: row;
        gap: 24px;
      }
      .glow {
        box-shadow: var(--glow-shadow);
      }
    `,
  ],
})
export class HeroComponent {
  private scrollService = inject(ScrollService);

  scrollTo(section: string): void {
    this.scrollService.setScrollTarget(section);
    console.log('Navigating to section:', section);
  }
}
