import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'dp-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
  imports: [CalendarComponent],
})
export class DatepickerComponent {}
