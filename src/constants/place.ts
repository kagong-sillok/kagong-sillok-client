import type { DayType, TabType } from '@/types/place';

export const MAP_HEIGHT = 219;

export const DAYS_OF_WEEK: { [key in DayType]: string } = {
  monday: '월',
  tuesday: '화',
  wednesday: '수',
  thursday: '목',
  friday: '금',
  saturday: '토',
  sunday: '일',
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

export const INITIAL_TABS: TabType[] = [
  {
    id: 1,
    isSelected: false,
    children: '호텔급 청결',
  },
  {
    id: 2,
    isSelected: false,
    children: '와이파이',
  },
  {
    id: 3,
    isSelected: false,
    children: '편안한 좌석',
  },
  {
    id: 4,
    isSelected: false,
    children: '조용한 공간',
  },
  {
    id: 5,
    isSelected: false,
    children: '적정 온도',
  },
  {
    id: 6,
    isSelected: false,
    children: '넓은 테이블',
  },
];

export const RATING_TEXT = ['별로에요', '그저 그래요', '괜찮아요', '만족해요', '최고예요'];
