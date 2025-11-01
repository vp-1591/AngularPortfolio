import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';

@Component({
  selector: 'projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <heading>Projects</heading>`,
  styles: [``],
  imports: [HeadingComponent],
})
export class ProjectsComponent {}
