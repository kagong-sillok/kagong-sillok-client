import { Place } from '@/types/place';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { SearchHistory } from '@/types/search';

interface SearchHistoryItemProps {
  searchHistory: Place;
}

Image;
export default function SearchHistoryItem({ searchHistory }: SearchHistoryItemProps) {
  const { id, name, address } = searchHistory;
  const router = useRouter();

  return (
    <li
      className="flex w-full cursor-pointer items-center justify-between px-6 py-[12px] transition-colors hover:bg-[#F7F7F8] active:bg-[#F7F7F8]"
      onClick={() => router.push(`/place/${id}`)}
    >
      <div className="flex h-10 flex-col gap-1">
        <div className="text-body2 text-bk100">{name}</div>
        <div className="text-caption text-bk50">{address}</div>
      </div>
      <div className="flex">
        <Image
          src="/assets/icons/16/Searcharrow.svg"
          width={16}
          height={16}
          alt="searcharrow"
          className="ml-1 cursor-pointer"
          onClick={() => router.push(`/place/${id}`)}
        />
      </div>
    </li>
  );
}
