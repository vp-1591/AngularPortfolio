import { Component } from '@angular/core';
import { TextComponent } from '../../../shared/ui/text.component';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { StatComponent } from './stat.component';

@Component({
  selector: 'about',
  template: `
    <div class="center">
      <heading>About</heading>
      <div class="about-content">
        <div class="about-description">
          <text
            [styles]="{
              fontSize: '18px',
              lineHeight: '30px'
            }"
            type="Inter"
          >
            I’m an informatics student and aspiring Frontend Developer with hands-on experience in
            React, React Native, and TypeScript. I enjoy transforming ideas into clean, responsive,
            and user-friendly interfaces.
          </text>
          <text
            [styles]="{
              fontSize: '18px',
              lineHeight: '30px'
            }"
            type="Inter"
          >
            I’m focused on writing maintainable code, learning best practices, and growing into a
            developer who builds scalable, well-designed web applications. My goal is to
            continuously improve and contribute to real-world projects that make an impact.
          </text>
        </div>
        <div class="about-stats">
          <stat statValue="3+" statLabel="Projects Completed" />
          <stat statValue="6+" statLabel="Months Experience" />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 50px;
      }
      .about-content {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 50px;
        padding: 35px;
        flex-direction: row;
      }
      .about-description {
        flex-direction: column;
        display: flex;
        gap: 24px;
        width: 40vw;
      }
      .about-stats {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `,
  ],
  imports: [HeadingComponent, TextComponent, StatComponent],
})
export class AboutComponent {}
