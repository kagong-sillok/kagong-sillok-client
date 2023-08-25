import type { DayType } from '@/types/place';

export function getCurrentDay(currentTime: Date): DayType {
  const currentDay = currentTime.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();

  return currentDay as DayType;
}
