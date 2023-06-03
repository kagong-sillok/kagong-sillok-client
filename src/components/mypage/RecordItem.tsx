import Dot from './Dot';
import { RecordItem } from '@/types/mypage';
import { format } from 'date-fns';

export default function RecordItem({ data }: { data: RecordItem }) {
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
        <div className="h-16 w-16 bg-bk30">이미지</div>
      </div>
    </>
  );
}
