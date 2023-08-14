import { Dot } from '@/app/mypage/components';
import { format } from 'date-fns';
import Image from 'next/image';

import type { StudyRecord } from '@/types/record';

interface RecordItemProps {
  data: StudyRecord;
}

export default function RecordItem({ data }: RecordItemProps) {
  const { placeName, description, studyDate } = data;
  const date = format(new Date(studyDate), "h'시간' m'분'");
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
        <Image src="/assets/Icons/null.svg" width={64} height={64} alt="default" />
      </div>
    </>
  );
}
