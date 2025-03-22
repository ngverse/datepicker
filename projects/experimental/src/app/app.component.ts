import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonthViewComponent } from '@ngverse/datepicker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MonthViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'experimental';
}
