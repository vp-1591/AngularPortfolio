import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { ContactComponent } from './contact.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SectionCenterComponent } from '../../../shared/ui/section-center.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section-center>
      <heading>Contact</heading>

      @if (isMobileLayout()) {
      <div class="scroll-wrapper">
        <contact
          imageUri="assets/contacts/mail.svg"
          title="Email"
          value="abrosimov.vadym@gmail.com"
        />
        <contact imageUri="assets/contacts/phone.svg" title="Phone" value="+48 575 086 515" />
        <contact imageUri="assets/contacts/location.svg" title="Location" value="Warsaw, Poland" />
      </div>
      }@else{
      <div class="contacts-content">
        <contact
          imageUri="assets/contacts/mail.svg"
          title="Email"
          value="abrosimov.vadym@gmail.com"
        />
        <contact imageUri="assets/contacts/phone.svg" title="Phone" value="+48 575 086 515" />
        <contact imageUri="assets/contacts/location.svg" title="Location" value="Warsaw, Poland" />
      </div>
      }
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
    </section-center>

    <div class="spacer"></div>
    <app-footer />
  `,
  styles: [
    `
      .spacer {
        height: 30vh;
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
      .scroll-wrapper {
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        width: 70vw;
        gap: 10vw;
        align-items: stretch;
        padding: 0 15vw;
        scroll-snap-type: x mandatory;
      }

      .scroll-wrapper::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
  imports: [HeadingComponent, ContactComponent, SectionCenterComponent, FooterComponent],
})
export class ContactsComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isMobileLayout = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      // Map the full state object to just the boolean 'matches' value
      .pipe(map((state) => state.matches)),
    // Now the initial value only needs to be the boolean type
    { initialValue: false }
  );
}
