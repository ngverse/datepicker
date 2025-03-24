import { Component, computed } from '@angular/core';
import { injectDpDatepickerAdapter } from '../adapter/datepicker.token';
import { DayCell } from '../core/day-cell';

@Component({
  selector: 'dp-month-view',
  imports: [],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.css',
})
export class MonthViewComponent {
  private _dateAdapter = injectDpDatepickerAdapter();

  weeks = this._dateAdapter.getDayOfWeekNames('narrow');

  weekDays = computed(() => {
    const date = this._dateAdapter.currentDate();
    const month = date;

    const startOfMonth = this._dateAdapter.startOfMonth(month);
    const endOfMonth = this._dateAdapter.endOfMonth(month);
    const currentMonth = this._dateAdapter.month(month);

    // Start from Sunday before or on the 1st of the month
    const calendarStart = this._dateAdapter.startOfWeek(startOfMonth); // default week starts on Sunday
    // End on Saturday after or on the last day of the month
    const calendarEnd = this._dateAdapter.endOfWeek(endOfMonth);

    let current = this._dateAdapter.clone(calendarStart);
    const cells: DayCell[][] = [];

    while (
      this._dateAdapter.isBefore(current, calendarEnd) ||
      this._dateAdapter.isSame(current, calendarEnd)
    ) {
      const cell: DayCell[] = [];
      for (let i = 0; i < 7; i++) {
        const _currentMonth = this._dateAdapter.month(current);
        cell.push(
          new DayCell(
            this._dateAdapter.format(current, 'D'),
            new Date(),
            _currentMonth === currentMonth
          )
        );
        current = this._dateAdapter.addDay(current, 1); // current.add(1, 'day');
      }
      cells.push(cell);
    }
    return cells;
  });

  days = this._dateAdapter.daysInMonth(
    this._dateAdapter.createDate(2025, 3, 23)
  );

  daysData = new Array(this.days).fill(1).map((_, i) => i + 1);
}
