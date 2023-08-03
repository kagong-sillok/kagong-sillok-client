'use client';

import { ReviewSection } from './components';
import Footer from '../components/Footer';
import PlaceTopNavigationBar from '../components/PlaceTopNavigationBar';
import { useGetImages } from '@/apis/image';
import { useGetPlace } from '@/apis/place';
import { Info, KagongItem, Tag } from '@/app/place/components';
import { KakaoMap } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

import type { PlaceConditionType } from '@/types/place';

export default function Page({ params }: { params: { id: string } }) {
  const placeId = Number(params.id);

  const { data: placeData, isLoading, isError } = useGetPlace(placeId);
  const { data: imagesData } = useGetImages(placeData?.imageIds || []); // TODO: 장소 이미지 페이징 api 나오면 수정

  if (isLoading) return null;
  if (isError) return null;

  return (
    <>
      <PlaceTopNavigationBar name={placeData.name} />
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
        <div className="mt-10" />
        <ReviewSection placeId={placeId} />
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
      <Footer />
    </>
  );
}
