import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';

@Component({
  selector: 'contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="center">
    <heading>Contact</heading>
    <div class="contact-container"></div>
  </div>`,
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 40px;
      }
    `,
  ],
  imports: [HeadingComponent],
})
export class ContactsComponent {}
