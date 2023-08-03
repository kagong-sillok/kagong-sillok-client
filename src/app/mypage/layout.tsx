'use client';

import { Header, Tab, TabGroup } from './components';
import { TopNavigationBar } from '@/components';
import Image from 'next/image';
import { useSelectedLayoutSegments, useRouter } from 'next/navigation';

import type { PageType, UserData, ViewType } from '@/types/mypage';
import type { PropsWithChildren } from 'react';

type TabItems = { [key in PageType]: { label: string; key: ViewType }[] };

const views: TabItems = {
  PLACE: [
    { label: '찜한카페', key: 'BOOKMARKS' },
    { label: '작성한 리뷰', key: 'REVIEWS' },
  ],
  RECORD: [
    { label: '타임라인 보기', key: 'TIMELINE' },
    { label: '카공지도 보기', key: 'MAP' },
  ],
};

// 아직 유저 데이터가 없어 임시로 만든 데이터임
const userData: UserData = { name: '카페처돌이', time: '2023-06-01T01:20:00' };

export default function MypageLayout({ children }: PropsWithChildren) {
  const segments = useSelectedLayoutSegments();
  const router = useRouter();
  const page = segments[0].toUpperCase();

  return (
    <div className="h-screen">
      <TopNavigationBar
        title={page === 'RECORD' ? '카공기록' : ''}
        onBackClick={() => router.back()}
        rightNode={
          <Image
            src="/assets/icons/28/Close.svg"
            alt="Close"
            width={28}
            height={28}
            onClick={() => router.push('/')}
          />
        }
      />
      <Header page={page as PageType} user={userData} />
      <TabGroup>
        {segments.length > 0 &&
          views[page as PageType].map((el) => {
            const key = el.key.toLowerCase();
            return (
              <Tab
                key={el.key}
                label={el.label}
                active={segments.includes(key)}
                href={`/mypage/${segments[0]}/${key}`}
              />
            );
          })}
      </TabGroup>
      <div className="h-[calc(100%-208px)] overflow-scroll">{children}</div>
    </div>
  );
}
