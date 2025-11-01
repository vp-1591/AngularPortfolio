import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';

@Component({
  selector: 'stat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <text
      [styles]="{
        fontSize: '30px',
        color: 'var(--primary-color)',
        textShadow: '0 0 20px var(--primary-color)'
      }"
      >{{ statValue }}</text
    >
    <text
      [styles]="{ fontSize: '14px', textShadow: '0 0 20px var(--primary-color)' }"
      type="Inter"
      >{{ statLabel }}</text
    >
  `,
  styles: [
    `
      :host {
        width: 100%;
        flex-direction: column;
        display: flex;
        padding: 18px;
        border: 1px solid var(--primary-color-30);
        border-radius: 8px;
        box-shadow: 0 0 20px var(--primary-color-10), inset 0 0 20px var(--primary-color-10);
        justify-content: center;
        align-items: center;
        min-width: 18vw;
        gap: 2px;
      }
    `,
  ],
  imports: [TextComponent],
})
export class StatComponent {
  @Input() statValue?: string;
  @Input() statLabel?: string;
}
