import {
  Component,
  contentChild,
  effect,
  ElementRef,
  inject,
  ViewChild,
  viewChild,
} from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.components';
import { ContactsComponent } from './contact/contacts.component';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactsComponent],
  template: `
    <article class="home-container">
      <img [src]="svgUri" alt="Animated background graphic" class="hero-svg-layer" priority />
      <app-hero id="hero" class="section" />
      <about id="about" class="section" />
      <projects id="projects" class="section" />
      <skills id="skills" class="section" />
      <contacts id="contact" class="last" />
    </article>
  `,
  styles: [
    `
      .section {
        display: block;
        padding: 25vh 0 25vh;
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
      .last {
        padding: 25vh 0 0;
        display: block;
        scroll-snap-align: start;
        scroll-snap-stop: always;
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
      @media (max-width: 768px) {
        .hero-svg-layer {
          width: 100vw;
          height: 75vw;
        }
        .section {
          padding: 25vh 0 25vh;
        }
      }
    `,
  ],
})
export class HomeComponent {
  private scrollService = inject(ScrollService);

  constructor() {
    effect(() => {
      const sectionName = this.scrollService.scrollTarget();
      if (sectionName) {
        let el = document.getElementById(sectionName.sectionName);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  svgUri = 'assets/hero/bg.svg';
}
