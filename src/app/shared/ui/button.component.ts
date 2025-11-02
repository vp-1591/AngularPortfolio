import { Component, ChangeDetectionStrategy, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {
    // Host Bindings
    '[class]': 'hostClasses()', // Binds the computed class string
    role: 'button',
    '[attr.tabindex]': 'tabindex()',
    '(keydown)': 'handleKeydown($event)',
  },
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
  template: `<ng-content></ng-content>`,
})
export class ButtonComponent {
  variant = input<'primary' | 'secondary'>('primary');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);

  click = output<Event>();
  hostClasses = computed(() => {
    const variantClass = this.variant() === 'primary' ? 'button--primary' : 'button--secondary';
    return `button ${variantClass}`;
  });

  tabindex = computed(() => (this.disabled() ? -1 : 0));

  handleKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;

    // Only handle Enter key (ignoring space since you only asked for Enter)
    if (event.key === 'Enter') {
      event.preventDefault();
      // Trigger the native click, which will fire the external (click) output
      this.click.emit(event);
    }
  }
}
