import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.components';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent],
  template: `
    <article class="home-container">
      <img
        src="/assets/hero/bg.svg"
        alt="Animated background graphic"
        class="hero-svg-layer"
        priority
      />
      <app-hero class="section" />
      <about class="section" />
      <projects class="section" />
      <skills class="section" />
    </article>
  `,
  styles: [
    `
      .section {
        display: block;
        padding: 20vh 80px 30vh;
      }
      .hero-svg-layer {
        position: absolute;
        pointer-events: none;
        top: 55vh;
        left: 50vw;

        transform: translate(-50%, -50%);
        width: 75vw;
        height: 55vw;
        object-fit: cover;

        z-index: 1;

        opacity: 0.8;
      }
      .home-container {
        position: relative;
        width: 100%;
        gap: 70vh;
      }
    `,
  ],
})
export class HomeComponent {}
