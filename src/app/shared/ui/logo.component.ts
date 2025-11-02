import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TextComponent } from './text.component';
import { input } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: flex; justify-content: center; align-items: center; border-radius: 30px;',
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
  },
  template: ` <text class="logo-text">VA</text> `,
  styles: [
    `
      :host {
        border: 2px solid var(--primary-color);
      }
      .logo-text {
        color: var(--primary-color);
      }
    `,
  ],
  imports: [TextComponent],
})
export class LogoComponent {
  size = input(44);
}
