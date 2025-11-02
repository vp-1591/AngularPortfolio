import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card.component';
import { TextComponent } from '../../../shared/ui/text.component';

@Component({
  selector: 'contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <card class="contact-card">
      <img class="contact-icon" [src]="imageUri()" alt="Contact Image" />
      <text type="Inter" [styles]="{ fontSize: '16px' }">{{ title() }}</text>
      <text type="Inter" [styles]="{ fontSize: '14px' }">{{ value() }}</text>
    </card>
  `,
  styles: [
    `
      :host {
        width: 18vw;
        display: flex;
        flex-direction: column;
      }
      .contact-icon {
        width: 24px;
        height: 24px;
      }
      .contact-card {
        align-items: center;
        gap: 8px;
        flex: 1;
      }
    `,
  ],
  imports: [CardComponent, TextComponent],
})
export class ContactComponent {
  imageUri = input<string>('');
  title = input<string>('');
  value = input<string>('');
}
