import { Component, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../ui/logo.component';
import { TextComponent } from '../ui/text.component';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, TextComponent],

  template: `
    <app-logo [size]="44"></app-logo>
    <div class="nav-links">
      <div class="nav-button" (click)="handleNavClick('Home')">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">Home</text>
      </div>
      <div class="nav-button" (click)="handleNavClick('About')">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">About</text>
      </div>
      <div class="nav-button" (click)="handleNavClick('Projects')">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">Projects</text>
      </div>
      <div class="nav-button" (click)="handleNavClick('Skills')">
        <text type="Inter" [styles]="{ fontSize: '16px', fontWeight: 500 }">Skills</text>
      </div>
      <div class="nav-button" (click)="handleNavClick('Contact')">
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
  private scrollService = inject(ScrollService);

  handleNavClick(section: string): void {
    this.scrollService.setScrollTarget(section);
    console.log('Navigating to section:', section);
  }
}
