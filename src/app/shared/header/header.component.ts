import { Component, signal } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../ui/logo.component';

@Component({
  // standalone is default, no need to set
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent],

  template: `
    <app-logo [size]="44"></app-logo>
    <div class="nav-links">
      <div class="nav-button" (click)="handleNavClick($event)">
        <p>Home</p>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <p>About</p>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <p>Projects</p>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <p>Skills</p>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <p>Contact</p>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
        padding: 12px 40px;
        border-bottom: 1px solid var(--primary-color-20);
      }
      .nav-links {
        display: flex;
        gap: 32px;
        flex-direction: row;
      }
      .nav-button {
        cursor: pointer;
      }
    `,
  ],
})
export class HeaderComponent {
  handleNavClick(event: MouseEvent): void {
    console.log('Nav element was clicked from the header!', event);
    // Add your logic here
  }
  // Using signals for local component state
  isProjectsActive = signal(false);
}
