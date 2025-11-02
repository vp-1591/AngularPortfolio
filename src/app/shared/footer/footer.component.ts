import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <!-- <p>&copy; {{ currentYear }} Angular Portfolio</p> -->
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
