'use client';

import TimeInfo from './TimeInfo';
import { IconFlex } from '@/components';
import { formatTime } from '@/utils/formatTime';
import Image from 'next/image';
import { useState } from 'react';

import type { Place } from '@/apis/place';

interface DefaultInfoProps {
  place: Place;
}

export default function DefaultInfo({ place }: DefaultInfoProps) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const placeStatus = {
    OPEN: {
      text: '영업중',
      color: 'text-black text-body2',
    },
    CLOSED: {
      text: '영업종료',
      color: 'text-alert text-body2',
    },
  }[place.isOpen ? 'OPEN' : 'CLOSED'];

  const links = {
    INSTAGRAM: {
      text: '인스타그램',
    },
    BLOG: {
      text: '블로그',
    },
    WEB: {
      text: '홈페이지',
    },
  };

  return (
    <div className="flex flex-col gap-3.5 text-body2">
      <IconFlex
        icon={{
          src: '/assets/icons/16/Location-1.svg',
          alt: 'Location',
          width: 16,
          height: 16,
        }}
      >
        <p>{place.address}</p>
      </IconFlex>
      <IconFlex
        icon={{
          src: '/assets/icons/16/Time.svg',
          alt: 'Time',
          width: 16,
          height: 16,
        }}
      >
        <div className="flex" onClick={() => setIsToggleOpen((prev) => !prev)}>
          <span className={placeStatus.color}>{placeStatus.text}</span>
          <p className="circle relative pl-2.5 text-[13px]">
            {/* TODO: 현재 요일에 맞게 종료 시간 보이게 하기 */}
            {formatTime(place.businessHours[0].close)} 영업종료
          </p>
          <Image
            src={`/assets/icons/16/Arrow-${isToggleOpen ? 'down' : 'up'}.svg`}
            alt="Arrow"
            width={16}
            height={16}
          />
        </div>
        {isToggleOpen && <TimeInfo businessHours={place.businessHours} />}
      </IconFlex>
      <IconFlex
        icon={{
          src: '/assets/icons/16/Call.svg',
          alt: 'Call',
          width: 16,
          height: 16,
        }}
      >
        {place.phone}
      </IconFlex>
      <IconFlex
        icon={{
          src: '/assets/icons/16/Site.svg',
          alt: 'Site',
          width: 16,
          height: 16,
        }}
      >
        {place.links.map(({ linkType, url }) => (
          <a key={url} href={url} className="mr-2">
            {links[linkType].text}
          </a>
        ))}
      </IconFlex>
    </div>
  );
}
