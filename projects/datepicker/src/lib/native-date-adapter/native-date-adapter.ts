/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  DpDatepickerAdapter,
  NgpDateUnits,
  NgpDuration,
} from '../adapter/datepicker.adapter';

@Injectable({ providedIn: 'root' })
export class NativeDateAdapter implements DpDatepickerAdapter<Date> {
  create(values: NgpDateUnits): Date {
    throw new Error('Method not implemented.');
  }
  now(): Date {
    return new Date();
  }
  set(date: Date, values: NgpDateUnits): Date {
    throw new Error('Method not implemented.');
  }
  add(date: Date, duration: NgpDuration): Date {
    throw new Error('Method not implemented.');
  }
  subtract(date: Date, duration: NgpDuration): Date {
    throw new Error('Method not implemented.');
  }
  compare(a: Date, b: Date): number {
    throw new Error('Method not implemented.');
  }
  isEqual(a: Date, b: Date): boolean {
    throw new Error('Method not implemented.');
  }
  isBefore(a: Date, b: Date): boolean {
    throw new Error('Method not implemented.');
  }
  isAfter(a: Date, b: Date): boolean {
    throw new Error('Method not implemented.');
  }
  isSameDay(a: Date, b: Date): boolean {
    throw new Error('Method not implemented.');
  }
  isSameMonth(a: Date, b: Date): boolean {
    throw new Error('Method not implemented.');
  }
  isSameYear(a: Date, b: Date): boolean {
    throw new Error('Method not implemented.');
  }
  getYear(date: Date): number {
    throw new Error('Method not implemented.');
  }
  getMonth(date: Date): number {
    throw new Error('Method not implemented.');
  }
  getDate(date: Date): number {
    throw new Error('Method not implemented.');
  }
  getDay(date: Date): number {
    throw new Error('Method not implemented.');
  }
  getHours(date: Date): number {
    throw new Error('Method not implemented.');
  }
  getMinutes(date: Date): number {
    throw new Error('Method not implemented.');
  }
  getSeconds(date: Date): number {
    throw new Error('Method not implemented.');
  }
  getMilliseconds(date: Date): number {
    throw new Error('Method not implemented.');
  }
  startOfMonth(date: Date): Date {
    throw new Error('Method not implemented.');
  }
  endOfMonth(date: Date): Date {
    throw new Error('Method not implemented.');
  }
  startOfDay(date: Date): Date {
    throw new Error('Method not implemented.');
  }
  endOfDay(date: Date): Date {
    throw new Error('Method not implemented.');
  }
}
