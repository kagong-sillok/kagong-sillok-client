import { CONDITION_LIST } from '@/app/place/constants';
import Image from 'next/image';

import type { PlaceConditionType } from '@/types/place';

interface KagongItemProps {
  type: PlaceConditionType;
  isFirst?: boolean;
}

export default function KagongItem({ type, isFirst = false }: KagongItemProps) {
  const condition = CONDITION_LIST.find((item) => item.type === type);

  if (!condition) return null;

  return (
    <div
      className={`flex h-[156px] w-[130px] shrink-0 flex-col justify-between px-4 pb-5 pt-4 shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] ${
        isFirst ? 'bg-point/default text-white' : 'bg-white text-black'
      }`}
    >
      <Image
        src={condition.iconSrc}
        alt={condition.text}
        width={32}
        height={32}
        className={`filter ${isFirst ? 'invert' : ''}`}
      />
      <div>
        <p className={`text-body2 ${isFirst ? '' : 'text-violet/default'}`}>{condition.text}</p>
        <p className="text-sub1">{condition.title}</p>
      </div>
    </div>
  );
}
