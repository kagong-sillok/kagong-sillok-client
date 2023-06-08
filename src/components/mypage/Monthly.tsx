'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import '@/components/mypage/calendar.css';

import type { CalendarType } from '@/types/mypage';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// 임시 데이터
const marks = ['2023.06.01', '2023.06.11', '2023.06.14'];

function Monthly({ onViewChange }: { onViewChange: (type: CalendarType) => void }) {
  const [value, setValue] = useState<Value>(new Date());

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
        value={value}
        calendarType="US"
        tileContent={({ date, view }) => {
          const formatedDate = format(new Date(date), 'yyyy.MM.dd');
          const status = marks.includes(formatedDate) ? 'on' : 'off';
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
        navigationLabel={({ label }) => {
          return (
            <div className="flex cursor-pointer gap-0.5 text-sub1 text-background">
              {label}
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
