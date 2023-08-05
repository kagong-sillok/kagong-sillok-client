'use client';
import IconFlex from './IconFlex';
import KagongItem from './KagongItem';
import Tag from './Tag';
import TimeInfo from './TimeInfo';
import { useGetPlace } from '@/apis/place';
import { LINK_TEXT } from '@/app/place/constants';
import { Spacing } from '@/components';
import { formatTime } from '@/utils/formatTime';
import Image from 'next/image';
import { useState } from 'react';

import type { PlaceConditionType } from '@/types/place';

interface InfoSectionProps {
  placeId: number;
}

export default function InfoSection({ placeId }: InfoSectionProps) {
  const { data: placeData } = useGetPlace(placeId);

  const { tags, isOpen, address, name, businessHours, phone, links } = placeData;

  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {tags?.map((tag) => (
            <p key={tag} className="text-caption text-violet/default">
              {tag}
            </p>
          ))}
        </div>
        <Tag.OpenClosed type={isOpen ? 'OPEN' : 'CLOSED'} />
      </div>
      <h3 className="text-head3">{name}</h3>
      <Spacing size={8} />
      <p className="text-body2 text-bk60">{address}</p>
      <Spacing size={32} />
      <hr className="text-bk10" />
      <Spacing size={32} />
      <h5 className="text-sub1">기본 정보</h5>
      <Spacing size={16} />
      <div className="flex flex-col gap-3.5 text-body2">
        <IconFlex
          iconNode={<Image src="/assets/icons/16/Location-1.svg" alt="Location" fill />}
          textNode={address}
        />
        <IconFlex
          iconNode={<Image src="/assets/icons/16/Time.svg" alt="Time" fill />}
          textNode={<TimeInfo businessHours={businessHours} isPlaceOpen={isOpen} />}
        />
        <IconFlex
          iconNode={<Image src="/assets/icons/16/Call.svg" alt="Call" fill />}
          textNode={phone}
        />
        <IconFlex
          iconNode={<Image src="/assets/icons/16/Site.svg" alt="Site" fill />}
          textNode={links.map(({ linkType, url }) => (
            <a key={url} href={url} className="mr-2">
              {LINK_TEXT[linkType]}
            </a>
          ))}
        />
      </div>
      <Spacing size={40} />
      <h5 className="text-sub1">카공을 위한 정보</h5>
      <Spacing size={16} />
      <div className="flex w-[calc(100%+1.5rem)] gap-2 overflow-hidden overflow-x-scroll pb-5 pr-6">
        {['CLEAN', 'QUIET', 'SEAT', 'TABLE', 'TEMPERATURE', 'WIFI'].map((type, index) => (
          <KagongItem key={index} type={type as PlaceConditionType} isFirst={index === 0} />
        ))}
      </div>
      <a
        href="/"
        className="cursor-pointer text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2"
      >
        해당 카페에 자세히 알고 싶다면?
      </a>
    </section>
  );
}
