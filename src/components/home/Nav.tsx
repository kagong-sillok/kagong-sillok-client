import Tab from '@/components/common/Tab';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const filterItems = [
  {
    id: 1,
    name: '전체',
  },
  {
    id: 2,
    name: '넓은 공간',
  },
  {
    id: 3,
    name: '와이파이',
  },
  {
    id: 4,
    name: '노트북 명소',
  },
  {
    id: 5,
    name: '편안한',
  },
];

interface navProps {
  isBottomSheetUp: boolean;
}

export default function Nav({ isBottomSheetUp }: navProps) {
  const [selectedTab, setSelectedTab] = useState(1);
  const router = useRouter();

  return (
    <nav className="fixed top-0 z-50 max-h-[112px] w-full max-w-[448px] bg-white text-bk100">
      <div className="mx-4 my-3 flex items-center bg-background px-3.5 py-2">
        <Image src={'/assets/Icons/28/Menu.svg'} alt="menu" width={28} height={28} />
        <input
          type="text"
          className="ml-3 w-full bg-background text-body1 outline-none placeholder:text-bk30"
          placeholder="어느 지역의 카페를 보여드릴까요?"
          readOnly={true}
          onClick={() => router.push('/search')}
        />
      </div>
      {!isBottomSheetUp && (
        <div className="mb-3 flex !w-full flex-row gap-1 overflow-scroll px-4 scrollbar-hide">
          {filterItems.map((tab) => (
            <Tab
              key={tab.id}
              id={tab.id}
              isSelected={tab.id === selectedTab}
              setSelectedTab={setSelectedTab}
            >
              {tab.name}
            </Tab>
          ))}
        </div>
      )}
    </nav>
  );
}
