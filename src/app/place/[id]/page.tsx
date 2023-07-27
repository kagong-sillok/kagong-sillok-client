'use client';

import {
  Info,
  Header,
  KagongItem,
  ReviewItem,
  ReviewSheet,
  ShareSheet,
  Tag,
  TimeLogSheet,
  Tooltip,
} from './components';
import { useGetImages, useGetPlace, useGetReviews } from '@/apis/place';
import { KakaoMap, Button } from '@/components';
import { MAP_HEIGHT } from '@/constants/place';
import { useDetectScroll } from '@/hooks/useDetectScroll';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import type { PlaceConditionType } from '@/types/place';

export default function Page({ params }: { params: { id: string } }) {
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);
  const [isLogTimeSheetOpen, setIsLogTimeSheetOpen] = useState(false);
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);

  const placeId = Number(params.id);

  const { data: placeData, isLoading, isError } = useGetPlace(placeId);
  const { data: reviewsData } = useGetReviews(placeId);
  const { data: imagesData } = useGetImages(placeData?.imageIds || []); // TODO: 장소 이미지 페이징 api 나오면 수정

  const router = useRouter();
  const isScrolled = useDetectScroll(MAP_HEIGHT);

  if (isLoading) return null;
  if (isError) return null;

  return (
    <>
      <Header
        name={isScrolled ? placeData.name : ''}
        className={isScrolled ? '' : 'bg-opacity-0 invert filter'}
        onBackClick={() => router.push('/')}
        rightIcons={[
          {
            src: '/assets/icons/28/Bookmark.svg',
            alt: 'Bookmark',
            width: 28,
            height: 28,
            onClick: () => console.log('북마크 클릭'),
          },
          {
            src: '/assets/icons/28/Share.svg',
            alt: 'Share',
            width: 28,
            height: 28,
            onClick: () => setIsShareSheetOpen(true),
          },
        ]}
      />
      <div className="relative h-[219px]">
        <KakaoMap
          className="h-full"
          customCoordinates={{
            lat: placeData.latitude,
            lng: placeData.longitude,
          }}
          places={[placeData]}
        />
        <div className="absolute left-0 top-0 z-10 h-[219px] w-full bg-black bg-gradient-to-b from-bk100 to-white opacity-40"></div>
      </div>
      <section className="px-6 pt-[30px]">
        <div className="flex items-center justify-between">
          <div>
            {placeData.tags?.map((tag) => (
              <span key={tag} className="mr-1.5 text-caption text-violet/default">
                {tag}
              </span>
            ))}
          </div>
          <Tag.OpenClosed type={placeData.isOpen ? 'OPEN' : 'CLOSED'} />
        </div>
        <h3 className="mb-2 text-head3">{placeData.name}</h3>
        <p className="text-body2 text-bk60">{placeData.address}</p>

        <hr className="my-8 text-bk10" />

        <h5 className="mb-4 text-sub1">기본 정보</h5>
        <Info place={placeData} />
        <h5 className="mb-4 mt-10 text-sub1">카공을 위한 정보</h5>
        <div className="flex w-[calc(100%+1.5rem)] gap-2 overflow-hidden overflow-x-scroll pb-5 pr-6">
          {['CLEAN', 'QUIET', 'SEAT', 'TABLE', 'TEMPERATURE', 'WIFI'].map((type, index) => (
            <KagongItem key={index} type={type as PlaceConditionType} isFirst={index === 0} />
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
          <Link
            href={`/place/${params.id}/review`}
            className="flex cursor-pointer items-center gap-0.5 text-[14px] font-normal leading-5 text-bk60"
          >
            리뷰 더보기
            <Image
              src="/assets/icons/16/Arrow-right.svg"
              alt="Arrow-right"
              width={16}
              height={16}
              className="invert-[40%] filter"
            />
          </Link>
        </div>
        <div
          className="relative mb-10 flex cursor-pointer justify-center gap-2"
          onClick={() => setIsReviewSheetOpen(true)}
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
          {reviewsData?.pages.map(({ data }) =>
            data.reviews.map((review) => <ReviewItem key={review.id} review={review} />)
          )}
        </div>
        <Button type="ROUND_DEFAULT" className="mb-10" onClick={() => setIsReviewSheetOpen(true)}>
          리뷰 작성하기
        </Button>
        <h5 className="mb-4 text-sub1">갤러리</h5>
        <Link href={`place/${params.id}/gallery`} className="flex gap-1 pb-[100px]">
          {imagesData?.images.slice(0, 3).map(({ url }, index) => (
            <div key={url} className="relative w-full cursor-pointer before:block before:pb-[100%]">
              <Image
                src={url}
                alt="review-image"
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
                fill
              />
              {
                // TODO: 이미지 총 개수 - 3 / 총 개수를 현재 받고 있지 않아서 받게되면 수정
                index === 2 && imagesData?.images.length > 3 && (
                  <>
                    <div className="absolute left-0 top-0 flex w-full cursor-pointer items-center justify-center bg-black opacity-40 before:block before:pb-[100%]"></div>
                    <p className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sub1 text-white">
                      +{imagesData?.images.length - 3}
                    </p>
                  </>
                )
              }
            </div>
          ))}
        </Link>
      </section>
      <footer>
        <Button
          type="DEFAULT"
          className="fixed bottom-0 z-20 w-full min-w-[360px] max-w-[448px]"
          onClick={() => setIsLogTimeSheetOpen(true)}
        >
          카공 기록하기
        </Button>
      </footer>
      <ShareSheet isOpen={isShareSheetOpen} onClose={() => setIsShareSheetOpen(false)} />
      <ReviewSheet isOpen={isReviewSheetOpen} onClose={() => setIsReviewSheetOpen(false)} />
      <TimeLogSheet isOpen={isLogTimeSheetOpen} onClose={() => setIsLogTimeSheetOpen(false)} />
    </>
  );
}
