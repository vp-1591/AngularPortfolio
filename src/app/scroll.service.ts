// src/app/scroll.service.ts
import { Injectable, signal } from '@angular/core';

export interface ScrollAction {
  sectionName: string;
  timestamp: number; // Unique identifier to force change detection
}

@Injectable({ providedIn: 'root' })
export class ScrollService {
  // Signal to hold the name of the section to scroll to
  private _scrollTarget = signal<ScrollAction | null>(null);

  /** Read-only signal for components to subscribe to */
  readonly scrollTarget = this._scrollTarget.asReadonly();

  /** Updates the target section name */
  setScrollTarget(section: string): void {
    const action: ScrollAction = {
      sectionName: section,
      timestamp: Date.now(), // Always unique
    };
    this._scrollTarget.set(action);
  }
}
