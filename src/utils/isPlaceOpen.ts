import { getCurrentDay } from './getCurrentDay';
import { isAfter, isBefore, parse } from 'date-fns';

import type { Place } from '@/types/place';

export function isPlaceOpen(businessHours: Place['businessHours']) {
  const currentTime = new Date();
  const currentDay = getCurrentDay(currentTime);

  const dayInfo = businessHours.find((day) => day.dayOfWeek === currentDay);

  if (dayInfo) {
    const openTime = parse(dayInfo.open, 'HH:mm:ss', new Date());
    const closeTime = parse(dayInfo.close, 'HH:mm:ss', new Date());

    const isOpen = isAfter(currentTime, openTime) && isBefore(currentTime, closeTime);

    return isOpen;
  }

  return false;
}
