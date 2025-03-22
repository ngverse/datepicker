import { Component } from '@angular/core';
import { injectDpDatepickerAdapter } from '../adapter/datepicker.token';

@Component({
  selector: 'dp-month-view',
  imports: [],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.css',
})
export class MonthViewComponent {
  private _dateAdapter = injectDpDatepickerAdapter();

  weekDays = this._dateAdapter.getDayOfWeekNames('narrow');
}
