// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        min-height: 100vh;
        display: block;
      }
      main {
        /* Ensure main is displayed as block and fills width */
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class App {}
