import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'section-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 50px;
      }

      @media (max-width: 768px) {
        :host {
          gap: 16px;
        }
      }
    `,
  ],
})
export class SectionCenterComponent {}
