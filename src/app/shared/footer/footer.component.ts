import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../ui/logo.component';
import { TextComponent } from '../ui/text.component';
@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <app-logo />
      <text type="Inter" class="footer-text"> {{ currentYear }} © Vadym Abrosimov </text>
    </footer>
  `,
  styles: [
    `
      :host {
        max-height: 5vh;
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-top: 1px solid var(--primary-color-20);
        padding: 33px;
        gap: 16px;
      }
      @media (max-width: 768px) {
        .footer-text {
          font-size: 14px;
        }
      }
    `,
  ],
  imports: [LogoComponent, TextComponent],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
