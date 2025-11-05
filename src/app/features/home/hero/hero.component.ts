import { Component, inject } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';
import { ButtonComponent } from '../../../shared/ui/button.component';
import { ScrollService } from '../../../scroll.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  template: `
    <div class="center">
      <div class="hero-head">
        <text class="title" type="Orbitron">Vadym Abrosimov</text>
        <div class="subtitle">
          <text [styles]="{ color: 'var(--primary-color)' }">FRONTEND</text
          ><text [styles]="{ fontWeight: 300 }" type="Inter">DEVELOPER</text>
        </div>
      </div>
      <div class="hero-description">
        <text class="hero-description-text" type="Inter">
          Passionate Frontend Developer focused on building fast, responsive, and visually engaging
          web experiences.
        </text>
      </div>
      <div class="hero-buttons">
        <app-button class="glow" variant="primary" type="button" (click)="scrollTo('projects')">
          <text class="main-button button-text " type="Inter">View My Work</text>
        </app-button>
        <a
          href="assets/Abrosimov_CV_Frontend.pdf"
          download
          class="button-link-style"
          aria-label="Download"
        >
          <app-button variant="secondary" type="button"
            ><text class="button-text" type="Inter">Download CV</text></app-button
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
      .subtitle {
        font-size: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 12px;
        width: 100%;
      }
      .title {
        font-size: 92px;
        text-align: center;
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

      .hero-description-text {
        text-align: center;
        font-size: 24px;
      }

      .button-text {
        font-size: 20px;
      }
      .hero-buttons {
        display: flex;
        flex-direction: row;
        gap: 24px;
      }
      .glow {
        box-shadow: var(--glow-shadow);
      }
      .main-button {
        font-weight: 600;
      }

      @media (max-width: 768px) {
        .title {
          font-size: 32px;
        }
        .subtitle {
          font-size: 20px;
        }

        .hero-description {
          padding: 0;
        }
        .hero-description-text {
          font-size: 16px;
        }
        .hero-buttons {
          flex-direction: column;
          gap: 16px;
          width: 100%;
          align-items: center;
        }
        .button-text {
          font-size: 16px;
        }
      }
    `,
  ],
})
export class HeroComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isMobileLayout = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      // Map the full state object to just the boolean 'matches' value
      .pipe(map((state) => state.matches)),
    // Now the initial value only needs to be the boolean type
    { initialValue: false }
  );

  private scrollService = inject(ScrollService);

  scrollTo(section: string): void {
    this.scrollService.setScrollTarget(section);
    console.log('Navigating to section:', section);
  }
}
