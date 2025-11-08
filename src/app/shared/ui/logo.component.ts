import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TextComponent } from './text.component';
import { input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: flex; justify-content: center; align-items: center; border-radius: 30px;',
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
  },
  template: ` <text class="logo-text">VA</text> `,
  styles: [
    `
      :host {
        border: 2px solid var(--primary-color);
      }
      .logo-text {
        color: var(--primary-color);
      }

      @media (max-width: 768px) {
        .logo-text {
          font-size: 14px;
        }
      }
    `,
  ],
  imports: [TextComponent],
})
export class LogoComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isMobileLayout = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      // Map the full state object to just the boolean 'matches' value
      .pipe(map((state) => state.matches)),
    // Now the initial value only needs to be the boolean type
    { initialValue: false }
  );

  size = input(this.isMobileLayout() ? 36 : 44);
}
