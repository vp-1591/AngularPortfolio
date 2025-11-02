import { Component, ChangeDetectionStrategy } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: inline-block; line-height: 1;',
  },
  template: `<p
    class="text"
    [class.font-orbitron]="type() === 'Orbitron'"
    [class.font-inter]="type() === 'Inter'"
    [style]="styles()"
  >
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
  styles = input<Record<string, string | number> | null>(null);

  type = input<'Orbitron' | 'Inter'>('Orbitron');
}
