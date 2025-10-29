import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TextComponent } from './text.component';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // Host Bindings for size and centered display
    style: 'display: flex; justify-content: center; align-items: center; border-radius: 30px;',
    '[style.width.px]': 'size',
    '[style.height.px]': 'size',
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
  /** Pixel size for the SVG (both width and height) */
  @Input() size = 44;
}
