import { useGetImages } from '@/apis/image';
import { Dot } from '@/app/mypage/components';
import { formatDuration } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';

import type { TimelineRecord } from '@/types/record';

interface RecordItemProps {
  data: TimelineRecord;
}

export default function RecordItem({ data }: RecordItemProps) {
  const { placeName, description, studyDate, images, duration } = data;
  const date = formatDuration(
    {
      hours: Math.floor(duration / 60),
      minutes: duration % 60,
    },
    {
      locale: ko,
      zero: true,
    }
  );
  const imgSrc = images[0]?.url || '/assets/icons/null.svg';

  return (
    <>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col justify-start gap-0.5">
          <div className="text-sub1">{placeName}</div>
          <div className="text-violet/default flex items-center gap-2 text-point/default">
            <div>{description}</div>
            <Dot />
            <div>{date}</div>
          </div>
        </div>
        <Image src={imgSrc} width={64} height={64} alt="default" />
      </div>
    </>
  );
}
