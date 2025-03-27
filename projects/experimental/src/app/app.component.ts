import { Component } from '@angular/core';
import { DatepickerComponent } from '@ngverse/datepicker';

@Component({
  selector: 'app-root',
  imports: [DatepickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'experimental';
}
