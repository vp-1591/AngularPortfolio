// src/app/scroll.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  // Signal to hold the name of the section to scroll to
  private _scrollTarget = signal<string | null>(null);

  /** Read-only signal for components to subscribe to */
  readonly scrollTarget = this._scrollTarget.asReadonly();

  /** Updates the target section name */
  setScrollTarget(section: string): void {
    this._scrollTarget.set(section);
  }
}
