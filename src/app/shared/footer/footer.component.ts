import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  // standalone is default, no need to set
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <!-- <p>&copy; {{ currentYear }} Angular Portfolio</p> -->
    </footer>
  `,
})
export class FooterComponent {
  // Prefer type inference when the type is obvious
  currentYear = new Date().getFullYear();
}
