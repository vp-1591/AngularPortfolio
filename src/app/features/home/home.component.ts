import { Component } from '@angular/core';
// import { HeroComponent } from './hero/hero.component';
// import { ProjectsComponent } from './projects/projects.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero/hero.component'; // Import the HeroComponent
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  // standalone is default, no need to set
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProjectsComponent], // Add HeroComponent to imports
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
      <!--
      @if (true) {
      <app-projects />
      } -->
    </article>
  `,
  styles: [
    `
      .section {
        display: block;
        padding: 20vh 80px 30vh;
      }
      .hero-svg-layer {
        /* Place the image to cover the entire container */
        position: absolute;
        pointer-events: none; /* Allows clicks to pass through */
        /* 1. Center the top-left corner of the image at the container's center */
        top: 55vh;
        left: 50vw;

        /* 2. Use 'transform: translate(-50%, -50%)' to shift the image 
     back by half of its own width and height, aligning its *center* with the container's center. */
        transform: translate(-50%, -50%);
        width: 75vw;
        height: 55vw;
        object-fit: cover; /* Ensures it scales correctly */

        /* Draw the SVG below the main content */
        z-index: 1;

        /* Optional: Add slight opacity if needed */
        opacity: 0.8;
      }
      .home-container {
        position: relative; /* Establishes a positioning context for the SVG */
        /* Set the dimensions for the background to be visible */
        width: 100%;
        gap: 70vh;
      }
    `,
  ],
})
export class HomeComponent {}
