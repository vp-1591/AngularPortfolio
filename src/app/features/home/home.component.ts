import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
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
      <img
        src="/assets/hero/bg.svg"
        alt="Animated background graphic"
        class="hero-svg-layer"
        priority
      />
      <app-hero #hero class="section" />
      <about #about class="section" />
      <projects #projects class="section" />
      <skills #skills class="section" />
      <contacts #contacts class="section last" />
    </article>
  `,
  styles: [
    `
      .section {
        display: block;
        padding: 20vh 80px 30vh;
      }
      .last {
        padding-bottom: 20vh;
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
export class HomeComponent {
  private scrollService = inject(ScrollService);

  heroSection = viewChild<ElementRef>('hero');
  aboutSection = viewChild<ElementRef>('about');
  projectsSection = viewChild<ElementRef>('projects');
  skillsSection = viewChild<ElementRef>('skills');
  contactSection = viewChild<ElementRef>('contacts');

  // Map section names to their ElementRef signal
  private sectionsMap = new Map([
    ['Home', this.heroSection],
    ['About', this.aboutSection],
    ['Projects', this.projectsSection],
    ['Skills', this.skillsSection],
    ['Contact', this.contactSection],
  ]);

  constructor() {
    // 1. Create an effect to react when the scrollTarget signal changes
    effect(() => {
      const sectionName = this.scrollService.scrollTarget();
      if (sectionName) {
        this.scrollToSection(sectionName);
      }
    });
  }

  scrollToSection(sectionName: string): void {
    console.log('Scrolling to section:', sectionName);
    const sectionSignal = this.sectionsMap.get(sectionName);

    if (sectionSignal) {
      const elementRef = sectionSignal();

      if (elementRef) {
        console.log('ElementRef: ', elementRef);
        elementRef.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }
}
