'use client';
import { DAYS_OF_WEEK } from '@/app/place/constants';
import { Spacing } from '@/components';
import { formatTime } from '@/utils/formatTime';
import Image from 'next/image';
import { useState } from 'react';

import type { Place } from '@/types/place';

interface TimeInfoProps {
  businessHours: Place['businessHours'];
  isPlaceOpen: Place['isOpen'];
}

export default function TimeInfo({ businessHours, isPlaceOpen }: TimeInfoProps) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <div className="flex" onClick={() => setIsToggleOpen((prev) => !prev)}>
        <span className={`text-body2 ${isPlaceOpen ? 'text-black' : 'text-alert'}`}>
          {isPlaceOpen ? '영업중' : '영업종료'}
        </span>
        <p className="circle relative pl-2.5 text-[13px]">
          {/* TODO: 현재 요일에 맞게 종료 시간 보이게 하기 */}
          {formatTime(businessHours[0].close)} 영업종료
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
