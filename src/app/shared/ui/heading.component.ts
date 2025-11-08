import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TextComponent } from './text.component';

@Component({
  imports: [TextComponent],
  selector: 'heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <text [styles]="tagStyle"><&nbsp;</text>
    <text [styles]="{ textTransform: 'uppercase' }">
      <ng-content></ng-content>
    </text>
    <text [styles]="tagStyle">&nbsp;/></text>`,
  styles: [
    `
      :host {
        display: block;
        line-height: 1.2;
        font-size: 48px;
        text-transform: 'uppercase';
      }

      @media (max-width: 768px) {
        :host {
          font-size: 32px;
        }
      }
    `,
  ],
})
export class HeadingComponent {
  protected tagStyle = {
    color: 'var(--primary-color)',
    textTransform: 'uppercase',
  };
}
