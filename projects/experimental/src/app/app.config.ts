import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideDpDatepickerAdapter } from '@ngverse/datepicker';
import { withDpDayjsDateAdapter } from '@ngverse/dayjs-date-adapter';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideDpDatepickerAdapter(withDpDayjsDateAdapter()),
  ],
};
