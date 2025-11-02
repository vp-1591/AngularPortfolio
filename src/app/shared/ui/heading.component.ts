import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TextComponent } from './text.component';

@Component({
  imports: [TextComponent],
  selector: 'heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <text [styles]="tagStyle"><&nbsp;</text>
    <text [styles]="{ fontSize: '48px', textTransform: 'uppercase' }">
      <ng-content></ng-content>
    </text>
    <text [styles]="tagStyle">&nbsp;/></text>`,
  styles: [
    `
      :host {
        display: block;
        line-height: 1.2;
      }
    `,
  ],
})
export class HeadingComponent {
  protected tagStyle = {
    color: 'var(--primary-color)',
    fontSize: '48px',
    textTransform: 'uppercase',
  };
}
