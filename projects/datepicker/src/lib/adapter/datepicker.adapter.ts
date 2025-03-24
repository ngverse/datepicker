export interface DpDatepickerAdapter<T> {
  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[];

  daysInMonth(date: T): number;

  createDate(year: number, month: number, date: number): T;

  clone(date: T): T;

  startOfMonth(date: T): T;

  endOfMonth(date: T): T;

  startOfWeek(date: T): T;

  endOfWeek(date: T): T;

  month(date: T): number;

  addDay(date: T, day: number): T;

  currentDate(): T;

  isSame(date1: T, date2: T): boolean;

  isBefore(date1: T, date2: T): boolean;

  format(date: T, format: string): string;
}
