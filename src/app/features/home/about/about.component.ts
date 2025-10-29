import { Component } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';

@Component({
  selector: 'about',
  template: ` <div class="center"></div> `,
  styles: [
    `
      :host {
        display: block;
        padding: 20vh 80px 30vh;
      }
    `,
  ],
})
export class AboutComponent {}
