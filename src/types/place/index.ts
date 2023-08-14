export interface BusinessHour {
  dayOfWeek: DayType;
  open: string;
  close: string;
}

export interface Place {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  imageIds: number[];
  tags: string[]; // ['#조용한', '#나만알고싶은', '#노트북']
  rating: number;
  isOpen: boolean;
  phone: string; // 02-1234-1234
  links: {
    linkType: LinkType;
    url: string;
  }[];
  businessHours: [
    Modify<BusinessHour, { dayOfWeek: 'MONDAY' }>,
    Modify<BusinessHour, { dayOfWeek: 'TUESDAY' }>,
    Modify<BusinessHour, { dayOfWeek: 'WEDNESDAY' }>,
    Modify<BusinessHour, { dayOfWeek: 'THURSDAY' }>,
    Modify<BusinessHour, { dayOfWeek: 'FRIDAY' }>,
    Modify<BusinessHour, { dayOfWeek: 'SATURDAY' }>,
    Modify<BusinessHour, { dayOfWeek: 'SUNDAY' }>,
  ];
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  latitudeBound: number;
  longitudeBound: number;
}

export interface PlaceCondition {
  id: number;
  tagName: string;
  tagContent: string;
}

export type LinkType = 'INSTAGRAM' | 'BLOG' | 'WEB';

export type DayType =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export type LineType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '인천1호선'
  | '인천2호선'
  | '신분당'
  | '경의중앙선'
  | '경춘선'
  | '수인분당'
  | '공항'
  | '신림선'
  | '의정부'
  | '에버라인'
  | '경강선';
