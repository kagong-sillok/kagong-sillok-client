import type { TabItem } from '@/components/Tab/Tabs';
import type { DayType } from '@/types/place';

export const MAP_HEIGHT = 219;

export const DAYS_OF_WEEK: { [key in DayType]: string } = {
  MONDAY: '월',
  TUESDAY: '화',
  WEDNESDAY: '수',
  THURSDAY: '목',
  FRIDAY: '금',
  SATURDAY: '토',
  SUNDAY: '일',
};

export const CONDITION_LIST = [
  {
    type: 'CLEAN',
    text: '청결',
    title: '호텔급 청결',
    iconSrc: '/assets/icons/32/Cleaning.svg',
  },
  {
    type: 'WIFI',
    text: '와이파이',
    title: '빵빵 터짐',
    iconSrc: '/assets/icons/32/Internet.svg',
  },
  {
    type: 'SEAT',
    text: '좌석',
    title: '편안한 의자',
    iconSrc: '/assets/icons/32/Livingroom.svg',
  },
  {
    type: 'TEMPERATURE',
    text: '온도',
    title: '쾌적상쾌',
    iconSrc: '/assets/icons/32/Aircon.svg',
  },
  {
    type: 'TABLE',
    text: '테이블',
    title: '넓은 테이블',
    iconSrc: '/assets/icons/32/table.svg',
  },
  {
    type: 'QUIET',
    text: '소음',
    title: '조용한 공간',
    iconSrc: '/assets/icons/32/Quait.svg',
  },
];

export const INITIAL_TABS: TabItem[] = [
  {
    id: 1,
    isSelected: false,
    text: '호텔급 청결',
  },
  {
    id: 2,
    isSelected: false,
    text: '와이파이',
  },
  {
    id: 3,
    isSelected: false,
    text: '편안한 좌석',
  },
  {
    id: 4,
    isSelected: false,
    text: '조용한 공간',
  },
  {
    id: 5,
    isSelected: false,
    text: '적정 온도',
  },
  {
    id: 6,
    isSelected: false,
    text: '넓은 테이블',
  },
];

export const RATING_TEXT = ['별로예요', '그저 그래요', '괜찮아요', '만족해요', '최고예요'];

export const LINK_TEXT = {
  INSTAGRAM: '인스타그램',
  BLOG: '블로그',
  WEB: '홈페이지',
};
