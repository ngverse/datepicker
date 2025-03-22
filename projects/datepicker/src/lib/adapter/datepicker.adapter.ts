export interface DpDatepickerAdapter {
  /**
   * Gets a list of names for the days of the week.
   * @param style The naming style (e.g. long = 'Sunday', short = 'Sun', narrow = 'S').
   * @returns An ordered list of all weekday names, starting with Sunday.
   */
  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[];
}
