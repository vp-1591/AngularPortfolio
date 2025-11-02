import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 0 0 20px var(--primary-color-30);
        padding: 24px;
        border-radius: 8px;
        border: 1px solid var(--primary-color-30);
        overflow: hidden;
        height: 100%;
      }
    `,
  ],
})
export class CardComponent {}
