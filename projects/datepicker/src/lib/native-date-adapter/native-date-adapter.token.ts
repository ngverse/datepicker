import { NativeDateAdapter } from './native-date-adapter';

export function withDpNativeDateAdapter() {
  return new NativeDateAdapter();
}
