import { Component, model } from '@angular/core';
import { DayViewComponent } from '../day-view/day-view.component';
import { MonthViewComponent } from '../month-view/month-view.component';
import { ViewType } from '../types/view-type';
import { YearViewComponent } from '../year-view/year-view.component';

@Component({
  selector: 'dp-calendar',
  imports: [DayViewComponent, MonthViewComponent, YearViewComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  viewType = model<ViewType>('day');
  month = model<number | null>(null);
  day = model<number | null>(null);
  year = model<number | null>(null);

  changeViewType($event: ViewType) {
    this.viewType.set($event);
  }

  daySelected($event: number) {
    this.day.set($event);
  }

  monthSelected($event: number) {
    this.month.set($event);
  }

  yearSelected($event: number) {
    this.year.set($event);
  }
}
