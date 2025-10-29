import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgStyle],
  selector: 'text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // Host Bindings for inline text flow
    style: 'display: inline-block; line-height: 1;',
  },
  template: `<p class="text" [class]="fontClass" [ngStyle]="styles">
    <ng-content></ng-content>
  </p>`,
  styles: [
    `
      .text {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-weight: 400;
      }

      /* Font family helpers */
      .font-orbitron {
        font-family: 'Orbitron', sans-serif;
      }

      .font-inter {
        font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
      }
    `,
  ],
})
export class TextComponent {
  /** Inline styles passed to the text element as an object (e.g. { 'font-size.px': 12 }) */
  @Input() styles: Record<string, string | number> | null = null;

  /** Font type selection */
  @Input() type: 'Orbitron' | 'Inter' = 'Orbitron';

  get fontClass(): string {
    return this.type === 'Orbitron' ? 'font-orbitron' : 'font-inter';
  }
}
