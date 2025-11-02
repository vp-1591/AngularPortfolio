import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { ContactComponent } from './contact.component';

@Component({
  selector: 'contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="center">
    <heading>Contact</heading>
    <div class="contacts-content">
      <contact
        imageUri="assets/contacts/mail.svg"
        title="Email"
        value="abrosimov.vadym@gmail.com"
      />
      <contact imageUri="assets/contacts/phone.svg" title="Phone" value="+48 575 086 515" />
      <contact imageUri="assets/contacts/location.svg" title="Location" value="Warsaw, Poland" />
    </div>
    <div class="social-container">
      <a href="https://github.com/vp-1591" target="_blank" rel="noopener noreferrer">
        <img src="assets/contacts/github.svg" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/vadym-abrosimov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/contacts/linkedin.svg" alt="linkedin" />
      </a>
    </div>
  </div>`,
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 50px;
      }
      .contacts-content {
        display: flex;
        flex-direction: row;
        gap: 32px;
        align-items: stretch;
        width: 100%;
        justify-content: center;
      }
      .social-container {
        gap: 48px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
      }
    `,
  ],
  imports: [HeadingComponent, ContactComponent],
})
export class ContactsComponent {}
