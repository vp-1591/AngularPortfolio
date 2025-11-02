import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../ui/logo.component';
import { TextComponent } from '../ui/text.component';
@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <app-logo [size]="44" />
      <text type="Inter" [styles]="{ fontSize: '16px' }">
        {{ currentYear }} © Vadym Abrosimov
      </text>
    </footer>
  `,
  styles: [
    `
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-top: 1px solid var(--primary-color-20);
        padding: 33px;
        gap: 16px;
      }
    `,
  ],
  imports: [LogoComponent, TextComponent],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
