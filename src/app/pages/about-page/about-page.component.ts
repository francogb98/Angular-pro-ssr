import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class AboutPageComponent {}

export default AboutPageComponent;
