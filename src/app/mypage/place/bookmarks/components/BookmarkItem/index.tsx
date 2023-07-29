import { Dot } from '@/app/mypage/components';
import Image from 'next/image';

import type { Place } from '@/types/place';

interface BookmarkItemProps {
  data: Place;
  isLast: boolean;
}

export default function BookmarkItem({ data, isLast }: BookmarkItemProps) {
  const { name, tags, rating, isOpen } = data;
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 py-6">
        <div className="flex flex-col justify-start gap-0.5">
          <div className="text-sub1">{name}</div>

          <div className="flex items-center gap-1.5">
            {tags.map((el) => {
              return (
                <div key={el} className="text-caption text-bk50">
                  {el}
                </div>
              );
            })}
          </div>

          <div className="mt-1.5 flex items-center gap-1.5 text-caption text-bk100">
            <Image
              src={`/assets/icons/40/emoji-rating${rating}_on.svg`}
              alt={`emoji-rating${rating}`}
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <Dot />
            <div>80m</div>
            <Dot />
            <div>{isOpen ? '영업중' : '영업종료'}</div>
          </div>
        </div>
        <Image src="/assets/Icons/null.svg" width={64} height={64} alt="default" />
      </div>
      {!isLast && <div className="h-px w-full bg-bk10" />}
    </>
  );
}
