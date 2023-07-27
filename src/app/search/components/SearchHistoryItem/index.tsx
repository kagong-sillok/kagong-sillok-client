import Image from 'next/image';

import type { SearchHistory } from '@/app/search/types';

interface SearchHistoryItemProps {
  searchHistory: SearchHistory;
  handleHistoryDelete: (id: number) => void;
}

Image;
export default function SearchHistoryItem({
  searchHistory,
  handleHistoryDelete,
}: SearchHistoryItemProps) {
  const { id, keyword, date } = searchHistory;

  return (
    <li className="flex w-full items-center justify-between px-6 py-[1.375rem] transition-colors active:bg-[#F7F7F8]">
      <div className="text-body2 text-bk100">{keyword}</div>
      <div className="flex">
        <span className="text-caption text-bk40">{date}</span>
        <Image
          src="/assets/icons/16/Close.svg"
          width={16}
          height={16}
          alt="close"
          className="filter-bk40 ml-1"
          onClick={() => handleHistoryDelete(id)}
        />
      </div>
    </li>
  );
}
