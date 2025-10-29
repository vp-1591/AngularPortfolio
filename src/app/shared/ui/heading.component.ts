import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TextComponent } from './text.component';

@Component({
  standalone: true,
  imports: [TextComponent],
  selector: 'heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: block; line-height: 1.2;',
  },
  template: ` <text [styles]="tagStyle"><</text>
    <text [styles]="{ fontSize: '48px' }">
      <ng-content></ng-content>
    </text>
    <text [styles]="tagStyle">/></text>`,
  styles: [``],
})
export class HeadingComponent {
  protected tagStyle = {
    color: 'var(--primary-color)',
    fontSize: '48px',
  };
}
