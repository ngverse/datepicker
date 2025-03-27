import { Component, input, output } from '@angular/core';
import { ViewType } from '../types/view-type';

@Component({
  selector: 'dp-month-view',
  imports: [],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.css',
})
export class MonthViewComponent {
  changeView = output<ViewType>();
  monthSelected = output<number>();
  month = input<number | null>();
}
