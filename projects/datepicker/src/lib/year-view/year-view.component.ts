import { Component, input, output } from '@angular/core';

@Component({
  selector: 'dp-year-view',
  imports: [],
  templateUrl: './year-view.component.html',
  styleUrl: './year-view.component.css',
})
export class YearViewComponent {
  yearSelected = output<number>();
  year = input<number | null>();
}
