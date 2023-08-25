'use client';

import { Monthly, Weekly } from './components';
import { useTimelineRecords } from '@/apis/record';
import { useGetUserInfo } from '@/apis/user';
import { TimeLineDate, TimelineRecord } from '@/types/record';
import { useCallback, useState } from 'react';

import type { CalendarType } from '@/types/mypage';

function Calendar({
  updateCurrentDate,
  data,
}: {
  updateCurrentDate: (date: TimeLineDate) => void;
  data: { studyRecords: TimelineRecord[] } | undefined;
}) {
  const [viewType, setViewType] = useState<CalendarType>('MONTH');

  return (
    <>
      {viewType === 'MONTH' ? (
        <Monthly onViewChange={setViewType} updateCurrentDate={updateCurrentDate} data={data} />
      ) : (
        <Weekly onViewChange={setViewType} data={data} />
      )}
    </>
  );
}

export default Calendar;
