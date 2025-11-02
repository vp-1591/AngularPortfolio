import { Component, signal } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../ui/logo.component';
import { TextComponent } from '../ui/text.component';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, TextComponent],

  template: `
    <app-logo [size]="44"></app-logo>
    <div class="nav-links">
      <div class="nav-button" (click)="handleNavClick($event)">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">Home</text>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">About</text>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">Projects</text>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">Skills</text>
      </div>
      <div class="nav-button" (click)="handleNavClick($event)">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">Contact</text>
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
        align-items: center;
        display: flex;
        justify-content: center;
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
