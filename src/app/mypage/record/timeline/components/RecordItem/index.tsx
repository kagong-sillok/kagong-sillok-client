import Dot from './Dot';
import { format } from 'date-fns';
import Image from 'next/image';

import type { RecordItem } from '@/types/mypage';

interface RecordItemProps {
  data: RecordItem;
}

export default function RecordItem({ data }: RecordItemProps) {
  const { name, content, time } = data;
  const date = format(new Date(time), "h'시간' m'분'");
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col justify-start gap-0.5">
          <div className="text-sub1">{name}</div>
          <div className="flex items-center gap-2 text-body2 text-violet/default">
            <div>{content}</div>
            <Dot />
            <div>{date}</div>
          </div>
        </div>
        <Image src="/assets/Icons/null.svg" width={64} height={64} alt="default" />
      </div>
    </>
  );
}
