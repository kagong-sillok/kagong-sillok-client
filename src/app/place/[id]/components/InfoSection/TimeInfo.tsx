'use client';
import { DAYS_OF_WEEK } from '@/app/place/constants';
import { Spacing } from '@/components';
import { formatTime } from '@/utils/formatTime';
import { getCurrentDay } from '@/utils/getCurrentDay';
import Image from 'next/image';
import { useState } from 'react';

import type { Place } from '@/types/place';

interface TimeInfoProps {
  businessHours: Place['businessHours'];
  isPlaceOpen: boolean;
}

export default function TimeInfo({ businessHours, isPlaceOpen }: TimeInfoProps) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const currentDay = getCurrentDay(new Date());
  const currentBusinessHour = businessHours.filter(({ dayOfWeek }) => dayOfWeek === currentDay)[0];

  return (
    <>
      <div className="flex" onClick={() => setIsToggleOpen((prev) => !prev)}>
        <span className={`text-body2 ${isPlaceOpen ? 'text-black' : 'text-alert'}`}>
          {isPlaceOpen ? '영업중' : '영업종료'}
        </span>
        <p className="circle relative pl-2.5 text-[13px]">
          {formatTime(currentBusinessHour.close)} 영업종료
        </p>
        <Image
          src={`/assets/icons/16/Arrow-${isToggleOpen ? 'down' : 'up'}.svg`}
          alt="Arrow"
          width={16}
          height={16}
        />
      </div>
      {isToggleOpen && (
        <>
          <Spacing size={8} />
          <div className="flex flex-col gap-3">
            {businessHours.map(({ close, dayOfWeek, open }) => (
              <div key={dayOfWeek} className="flex gap-1.5 text-body2">
                <div>{DAYS_OF_WEEK[dayOfWeek]}</div>
                <div>
                  {formatTime(open)} - {formatTime(close)}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
