'use client';

import { Tab, TabGroup, Header } from '..';
import { useGetUserInfo } from '@/apis/user';
import { TopNavigationBar } from '@/components';
import Image from 'next/image';
import { useSelectedLayoutSegments, useRouter, redirect } from 'next/navigation';

import type { PageType, UserData, ViewType } from '@/types/mypage';

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

function LayoutHeader() {
  const segments = useSelectedLayoutSegments();
  const router = useRouter();
  const page = segments[0].toUpperCase();

  return (
    <>
      <TopNavigationBar
        title={page === 'RECORD' ? '카공기록' : ''}
        onBackClick={() => router.push('/')}
        rightNode={
          <Image
            src="/assets/icons/28/Close.svg"
            alt="Close"
            width={28}
            height={28}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />
        }
      />
      <Header page={page as PageType} />
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
    </>
  );
}

export default LayoutHeader;
