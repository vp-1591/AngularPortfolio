import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';

@Component({
  selector: 'tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <text type="Inter" [styles]="{ color: 'var(--primary-color)', fontSize: '14px' }"
    ><ng-content></ng-content
  ></text>`,
  styles: [
    `
      :host {
        padding: 6px;
        background-color: var(--primary-color-20);
        border-radius: 100px;
        text-align: center;
        display: flex;
        align-items: center;
      }
    `,
  ],
  imports: [TextComponent],
})
export class TagComponent {}
