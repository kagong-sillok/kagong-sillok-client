'use client';

import Calendar from './Calendar';
import { Monthly, Weekly } from './components';
import RecordList from './RecordList';
import { useTimelineRecords } from '@/apis/record';
import { useGetUserInfo } from '@/apis/user';
import { TimeLineDate } from '@/types/record';
import { useCallback, useState } from 'react';

function Timeline() {
  const [currentDate, setCurrentDate] = useState<TimeLineDate>({ year: 2023, month: 8 });
  const { data: userInfoData } = useGetUserInfo({});
  const { data: timeLineData } = useTimelineRecords(
    userInfoData?.id || -1,
    currentDate.year,
    currentDate.month
  );

  const updateCurrentDate = useCallback((date: TimeLineDate) => {
    setCurrentDate(date);
  }, []);

  return (
    <div>
      <Calendar data={timeLineData} updateCurrentDate={updateCurrentDate} />
      <RecordList data={timeLineData} />
    </div>
  );
}

export default Timeline;
