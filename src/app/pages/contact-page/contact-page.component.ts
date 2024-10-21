import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ContactPageComponent {}

export default ContactPageComponent;
