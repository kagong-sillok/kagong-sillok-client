'use client';

import { Monthly, Weekly } from './components';
import { useState } from 'react';

import type { CalendarType } from '@/types/mypage';

function Calendar() {
  const [viewType, setViewType] = useState<CalendarType>('MONTH');
  return (
    <>
      {viewType === 'MONTH' ? (
        <Monthly onViewChange={setViewType} />
      ) : (
        <Weekly onViewChange={setViewType} />
      )}
    </>
  );
}

export default Calendar;
