import { Component, inject } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { StatComponent } from './stat.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SectionCenterComponent } from '../../../shared/ui/section-center.component';

@Component({
  selector: 'about',
  template: `
    <section-center>
      <heading>About</heading>
      <div class="about-content">
        <div class="about-description">
          <text
            [styles]="{
              lineHeight: isMobileLayout() ? '24px' : '30px'
            }"
            type="Inter"
          >
            I’m an informatics student and aspiring Frontend Developer with hands-on experience in
            React, React Native, and TypeScript. I enjoy transforming ideas into clean, responsive,
            and user-friendly interfaces.
          </text>
          @if (!isMobileLayout()) {
          <text
            [styles]="{
              lineHeight: '30px'
            }"
            type="Inter"
          >
            I’m focused on writing maintainable code, learning best practices, and growing into a
            developer who builds scalable, well-designed applications. My goal is to continuously
            improve and contribute to real-world projects that make an impact.
          </text>
          }
        </div>
        <div class="about-stats">
          <stat statValue="3+" statLabel="Projects Completed" />
          <stat statValue="6+" statLabel="Months Experience" />
        </div>
      </div>
    </section-center>
  `,
  styles: [
    `
      .about-content {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 50px;
        flex-direction: row;
      }
      .about-description {
        flex-direction: column;
        display: flex;
        gap: 24px;
        width: 40vw;
        font-size: 18px;
        text-wrap: pretty;
      }
      .about-stats {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      @media (max-width: 768px) {
        .about-content {
          flex-direction: column;
          gap: 32px;
          padding: 20px 20px 0;
        }

        .about-description {
          width: 100%;
          text-align: center;
        }

        .about-description {
          font-size: 16px;
        }

        .about-stats {
          align-items: center;
        }
      }
    `,
  ],
  imports: [HeadingComponent, TextComponent, StatComponent, SectionCenterComponent],
})
export class AboutComponent {
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
