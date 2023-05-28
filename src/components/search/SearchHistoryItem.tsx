import Image from 'next/image';

interface SearchHistoryItemProps {
  keyword: string;
  date: string;
}

Image;
export default function SearchHistoryItem({ keyword, date }: SearchHistoryItemProps) {
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
        />
      </div>
    </li>
  );
}
