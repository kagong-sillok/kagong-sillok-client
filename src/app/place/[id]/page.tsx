'use client';

import Button from '@/components/common/Button';
import {
  DefaultInfo,
  Header,
  KagongBox,
  ReviewBox,
  ReviewSheet,
  Tag,
  Tooltip,
} from '@/components/place';
import { useGetPlaceById } from '@/hooks/queries/place/useGetPlaceById';
import Image from 'next/image';
import { useState } from 'react';

import type { PlaceConditionType } from '@/types/place';

export default function Page({ searchParams }: { searchParams: { id: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  const { data: place, isLoading, isError } = useGetPlaceById(searchParams.id);

  if (isLoading) return null;
  if (isError) return null;

  return (
    <div className="w-full overflow-y-scroll">
      <Header name={place.name} />
      <div className={`flex h-[219px] items-center justify-center bg-[#ddd]`}>지도</div>
      <section className="px-6 pt-[30px]">
        <div className="flex items-center justify-between">
          <div>
            {place.tags.map((tag) => (
              <span key={tag} className="mr-1.5 text-caption text-violet/default">
                {tag}
              </span>
            ))}
          </div>
          <Tag.OpenClosed type={place.isOpen ? 'OPEN' : 'CLOSED'} />
        </div>
        <h3 className="mb-2 text-head3">{place.name}</h3>
        <p className="text-body2 text-bk60">{place?.address}</p>
        <hr className="my-8 text-bk10" />

        <h5 className="mb-4 text-sub1">기본 정보</h5>
        <DefaultInfo place={place} />
        <h5 className="mb-4 mt-10 text-sub1">카공을 위한 정보</h5>
        <div className="flex w-[calc(100%+1.5rem)] gap-2 overflow-hidden overflow-x-scroll pb-5 pr-6">
          {['CLEAN', 'QUIET', 'SEAT', 'TABLE', 'TEMPERATURE', 'WIFI'].map((type, index) => (
            <KagongBox key={index} type={type as PlaceConditionType} isFirst={index === 0} />
          ))}
        </div>
        <a
          href=""
          className="cursor-pointer text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2"
        >
          해당 카페에 자세히 알고 싶다면?
        </a>
        <div className="mb-[47px] mt-10 flex justify-between">
          <h5 className="text-sub1">
            리뷰 <span className="text-violet/default">14</span>
          </h5>
          <div className="flex items-center gap-0.5 text-[14px] font-normal leading-5 text-bk60">
            리뷰 더보기
            <Image
              src="/assets/icons/16/Arrow-right.svg"
              alt="Arrow-right"
              width={16}
              height={16}
              className="invert-[40%] filter"
            />
          </div>
        </div>
        <div
          className="relative mb-10 flex cursor-pointer justify-center gap-2"
          onClick={() => setIsOpen(true)}
        >
          <Tooltip className="absolute bottom-12">
            리뷰는 큰 힘이 돼요! 클릭해서 리뷰를 남겨주세요
          </Tooltip>
          {[1, 2, 3, 4, 5].map((item) => (
            <Image
              key={item}
              src={`/assets/icons/40/emoji-rating${item}_off.svg`}
              alt={`emoji-rating${item}_off`}
              width={40}
              height={40}
            />
          ))}
        </div>

        <hr className="mb-6 text-bk10" />
        <div className="mb-6 flex flex-col gap-5">
          <ReviewBox />
          <ReviewBox />
          <ReviewBox />
          <ReviewBox />
        </div>
        <Button type="ROUND_DEFAULT" className="mb-10" onClick={() => setIsOpen(true)}>
          리뷰 작성하기
        </Button>
        <h5 className="mb-4 text-sub1">갤러리</h5>
        <div className="mb-[100px] flex justify-between">
          <div className="h-[120px] w-[120px] bg-black"></div>
          <div className="h-[120px] w-[120px] bg-black"></div>
          <div className="h-[120px] w-[120px] bg-black"></div>
        </div>
      </section>
      <footer>
        <Button type="DEFAULT" className="fixed bottom-0 z-50 w-full min-w-[360px] max-w-[448px]">
          카공 기록하기
        </Button>
      </footer>
      <ReviewSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
