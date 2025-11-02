import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card.component';
import { TextComponent } from '../../../shared/ui/text.component';

@Component({
  selector: 'contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <card>
      <img src="assets/contacts/mail.svg" alt="Contact Image" />
      <text type="Orbitron" [styles]="{ fontSize: '20px', color: 'var(--primary-color)' }"
        >Email</text
      >
      <text type="Inter" [styles]="{ fontSize: '16px' }">abrosimov.vadym@gmail.com</text>
    </card>
  `,
  styles: [``],
  imports: [CardComponent, TextComponent],
})
export class ContactComponent {}
