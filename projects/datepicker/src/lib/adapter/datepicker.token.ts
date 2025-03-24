import { InjectionToken, inject } from '@angular/core';
import { DpDatepickerAdapter } from './datepicker.adapter';

const DP_DATEPICKER_ADAPTER_TOKEN = new InjectionToken<
  DpDatepickerAdapter<unknown>
>('DP_DATEPICKER_ADAPTER_TOKEN');

export const injectDpDatepickerAdapter = () =>
  inject<DpDatepickerAdapter<unknown>>(DP_DATEPICKER_ADAPTER_TOKEN);

export const provideDpDatepickerAdapter = <T>(
  adapter: DpDatepickerAdapter<T>
) => ({
  provide: DP_DATEPICKER_ADAPTER_TOKEN,
  useValue: adapter,
});
