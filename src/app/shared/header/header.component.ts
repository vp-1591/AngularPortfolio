import { Component, inject, signal } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../ui/logo.component';
import { TextComponent } from '../ui/text.component';
import { ScrollService } from '../../scroll.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, TextComponent],

  template: `
    <app-logo class="logo" (click)="handleNavClick('hero')"></app-logo>
    @if (!isMobileLayout()) {
    <div class="nav-links">
      @for (link of navLinks; track link.section) {
      <div class="nav-button" (click)="handleNavClick(link.section)">
        <text
          class="unselectable"
          type="Inter"
          unselectable="on"
          [styles]="{ fontSize: '16px', fontWeight: 500 }"
          >{{ link.label }}</text
        >
      </div>
      }
    </div>
    } @else {
    <div class="hamburger-menu" (click)="toggleDrawer()">
      <text class="unselectable" type="Inter" [styles]="{ fontSize: '24px' }">☰</text>
    </div>
    <div class="mobile-drawer" [class.open]="isDrawerOpen()">
      @for (link of navLinks; track link.section) {
      <div class="drawer-link" (click)="handleNavClick(link.section)">
        <text
          unselectable="on"
          type="Inter"
          class="unselectable"
          [styles]="{
            fontSize: '32px',
            fontWeight: 500,
          }"
          >{{ link.label }}</text
        >
      </div>
      }
    </div>
    }
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
        padding: 12px 40px;
        border-bottom: 1px solid var(--primary-color-20);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        align-items: center;
      }
      :host::before {
        content: '';
        display: flex;
        backdrop-filter: blur(8px);
        background-color: var(--blur-color);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }
      .unselectable {
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
      }
      .logo {
        cursor: pointer;
      }
      .nav-button {
        cursor: pointer;
        align-items: center;
        display: flex;
        justify-content: center;
      }

      .nav-links {
        display: flex;
        gap: 32px;
        flex-direction: row;
      }

      .mobile-drawer {
        position: fixed;
        top: 68px;
        right: -110%;
        height: 80vh;
        width: 100%;
        z-index: 11;
        transition: right 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 0 30%;

        backdrop-filter: blur(10px);
        background-color: var(--blur-color);
      }

      .drawer-link {
        cursor: pointer;
        border-bottom: 1px solid var(--primary-color-20);
        padding: 12px 0;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      }

      .mobile-drawer.open {
        right: 0;
      }

      /* --- MOBILE STYLES (Max width for mobile devices) --- */
      @media (max-width: 768px) {
        :host {
          padding: 12px 30px;
        }
        .nav-links {
          display: none;
        }
        .hamburger-menu {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 12px;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  navLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ];

  private scrollService = inject(ScrollService);
  private breakpointObserver = inject(BreakpointObserver);

  isMobileLayout = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      // Map the full state object to just the boolean 'matches' value
      .pipe(map((state) => state.matches)),
    // Now the initial value only needs to be the boolean type
    { initialValue: false }
  );

  isDrawerOpen = signal(false);

  handleNavClick(section: string): void {
    this.scrollService.setScrollTarget(section);
    if (this.isMobileLayout()) {
      this.isDrawerOpen.set(false);
    }
  }

  toggleDrawer(): void {
    this.isDrawerOpen.update((value) => !value);
  }
}
