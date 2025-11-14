import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'slide-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="sliding-element" [class.slide-in]="isVisible()">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    .sliding-element {
      transition: opacity 1s ease-out, transform 0.6s ease-out;

      /* Initial state (hidden and off-screen) */
      /* Note: Overridden when the .slide-in class is NOT present */
      opacity: 0;
      transform: translateX(100px); /* Starts 100px to the right */
    }

    /* Final state: Element slides into place when the class is added */
    .sliding-element.slide-in {
      opacity: 1;
      transform: translateX(0);
    }
  `,
})
export class SlideInComponent implements OnInit {
  private el: ElementRef<HTMLElement> = inject(ElementRef);
  private platformId: Object = inject(PLATFORM_ID);
  // Use a signal for state management
  isVisible = signal(false);

  ngOnInit(): void {
    // Check if the application is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  // Move the observer logic into a dedicated method
  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
