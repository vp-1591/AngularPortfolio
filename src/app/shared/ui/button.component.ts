import { Component, Input, HostBinding, HostListener, ElementRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        border: none;
        outline: none;
        user-select: none;
      }

      :host([aria-disabled='true']) {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }

      :host(.button--primary) {
        background: var(--primary-color);
        color: var(--text-black-color);

        border: 2px solid transparent;
      }

      :host(.button--primary):hover {
        background: var(--primary-color-dark);
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
      }

      :host(.button--secondary) {
        background: transparent;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
      }

      :host(.button--secondary):hover {
        background: var(--primary-color);
        color: var(--text-black-color);
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  @HostBinding('class') get hostClasses(): string {
    return `button ${this.variant === 'primary' ? 'button--primary' : 'button--secondary'}`;
  }

  @HostBinding('attr.role') role = 'button';
  @HostBinding('attr.tabindex') get tabindex() {
    return this.disabled ? -1 : 0;
  }
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled ? 'true' : 'false';
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.disabled) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      // programmatic click will bubble and trigger host click handler (which will allow it)
      (this.host.nativeElement as HTMLElement).click();
    }
  }
}
