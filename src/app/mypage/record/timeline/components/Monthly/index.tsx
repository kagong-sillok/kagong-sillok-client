'use client';

import { StudyRecord, TimeLineDate, TimelineRecord } from '@/types/record';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import { Calendar } from 'react-calendar';

import '@/styles/calendar.css';
import type { CalendarType } from '@/types/mypage';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Monthly({
  onViewChange,
  updateCurrentDate,
  data,
}: {
  onViewChange: (type: CalendarType) => void;
  updateCurrentDate: (date: TimeLineDate) => void;
  data: { studyRecords: TimelineRecord[] } | undefined;
}) {
  const [value, setValue] = useState<Value>(new Date());
  const studyDays = data?.studyRecords.map((el) => el.studyDate);

  const handleChange = (date: Date) => {
    const [year, month] = format(date, 'yyyy-MM-dd').split('-');
    updateCurrentDate({ year: Number(year), month: Number(month) });
  };

  return (
    <div className="relative">
      <div
        className="absolute right-6 top-6 cursor-pointer text-caption text-background"
        onClick={() => onViewChange('WEEK')}
      >
        달력 접기
      </div>
      <Calendar
        onChange={setValue}
        onClickMonth={(value: Date) => handleChange(value)}
        onClickYear={(value: Date) => handleChange(value)}
        value={value}
        calendarType="gregory"
        tileContent={({ date, view }) => {
          const formatedDate = format(new Date(date), 'yyyy-MM-dd');
          const status = studyDays?.includes(formatedDate) ? 'on' : 'off';
          return view === 'month' ? (
            <div className="custom">
              <Image
                src={`/assets/icons/24/calendar_${status}.svg`}
                alt={`calendar_${status}`}
                width={24}
                height={24}
              />
              <div>{date.getDate()}</div>
            </div>
          ) : null;
        }}
        showNeighboringMonth={false}
        locale="ko-KO" // 한글버전
        next2Label={null}
        prev2Label={null}
        nextLabel={null}
        prevLabel={null}
        navigationLabel={({ date }) => {
          const [year, month] = format(date, 'yyyy-MM-dd').split('-');
          return (
            <div className="flex cursor-pointer gap-0.5 text-sub1 text-background">
              {year}년 {month}월
              <Image
                src={`/assets/icons/16/Arrow-down.svg`}
                alt={`Arrow-down`}
                width={16}
                height={16}
                className="invert filter"
              />
            </div>
          );
        }}
      />
    </div>
  );
}

export default Monthly;
