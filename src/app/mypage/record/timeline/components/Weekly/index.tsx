'use client';

import { StudyRecord, TimelineRecord } from '@/types/record';
import { format, startOfWeek } from 'date-fns';
import Image from 'next/image';

import type { CalendarType } from '@/types/mypage';

const koDays = ['일', '월', '화', '수', '목', '금', '토'];

function Weekly({
  onViewChange,
  data,
}: {
  onViewChange: (type: CalendarType) => void;
  data: { studyRecords: TimelineRecord[] } | undefined;
}) {
  const today = new Date();
  const [year, month, day] = format(startOfWeek(today), 'yyyy-MM-dd').split('-');
  const days = Array.from({ length: 7 }, (_, i) => `${year}-${month}-${Number(day) + i}`);

  const studyDays = data?.studyRecords.map((el) => el.studyDate);

  return (
    <div className="relative flex h-40 w-full flex-col items-center justify-center gap-[15px] bg-point/default px-6 py-5">
      <div
        className="absolute right-6 top-6 cursor-pointer text-caption text-background"
        onClick={() => onViewChange('MONTH')}
      >
        달력 펼치기
      </div>
      <div
        className="flex cursor-pointer gap-0.5 text-sub1 text-background"
        onClick={() => onViewChange('MONTH')}
      >
        {year}년 {month}월
        <Image
          src={`/assets/icons/16/Arrow-down.svg`}
          alt={`Arrow-down`}
          width={16}
          height={16}
          className="invert filter"
        />
      </div>
      <div className="relative flex w-full items-center justify-between">
        {koDays.map((el) => {
          return (
            <div key={el} className="h-5 w-[45px] text-center text-body2 text-background">
              {el}
            </div>
          );
        })}
      </div>
      <div className="relative flex w-full items-center justify-between">
        {days.map((el) => {
          const [year, month, day] = el.split('-');
          const status = studyDays?.includes(el) ? 'on' : 'off';
          return (
            <div
              key={el}
              className="flex h-[45px] w-11 flex-col items-center justify-center gap-[5px] text-caption text-background"
            >
              <Image
                src={`/assets/icons/24/calendar_${status}.svg`}
                alt="calendar_off"
                width={24}
                height={24}
              />
              <div>{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weekly;
