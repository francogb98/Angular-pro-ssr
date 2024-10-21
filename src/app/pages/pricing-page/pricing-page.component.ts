import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class PricingPageComponent {}

export default PricingPageComponent;
