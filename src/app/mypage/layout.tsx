'use client';

import { Gnb, Header, Tab, TabGroup } from '@/components/mypage';
import { useSelectedLayoutSegments, useRouter } from 'next/navigation';

import type { PageType, UserData, ViewType } from '@/types/mypage';

type TabItems = { [key in PageType]: { label: string; key: ViewType }[] };

const views: TabItems = {
  place: [
    { label: '찜한카페', key: 'bookmarks' },
    { label: '작성한 리뷰', key: 'reviews' },
  ],
  record: [
    { label: '타임라인 보기', key: 'timeline' },
    { label: '카공지도 보기', key: 'map' },
  ],
};

// 아직 유저 데이터가 없어 임시로 만든 데이터임
const userData: UserData = { name: '카페처돌이', time: '2023-06-01T01:20:00' };

export default function MypageLayout({ children }: { children: React.ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const router = useRouter();

  return (
    <div className="h-screen">
      <Gnb
        title={segments[0] === 'record' ? '카공기록' : ''}
        onBackClick={() => router.back()}
        onCloseClick={() => console.log('close')}
      />
      <Header page={segments[0] as PageType} user={userData} />
      <TabGroup>
        {segments.length > 0 &&
          views[segments[0] as PageType].map((el) => {
            return (
              <Tab
                key={el.key}
                label={el.label}
                active={segments.includes(el.key)}
                href={`/mypage/${segments[0]}/${el.key}`}
              />
            );
          })}
      </TabGroup>
      <div className="h-[calc(100%-208px)] overflow-scroll">{children}</div>
    </div>
  );
}
