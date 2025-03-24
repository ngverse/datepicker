import { Component } from '@angular/core';
import { MonthViewComponent } from '@ngverse/datepicker';

@Component({
  selector: 'app-root',
  imports: [MonthViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'experimental';
}
