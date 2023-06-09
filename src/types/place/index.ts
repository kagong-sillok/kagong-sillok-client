export type PlaceType = {
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
    linkType: 'INSTAGRAM' | 'BLOG' | 'WEB';
    url: string;
  }[];
  businessHours: [
    {
      dayOfWeek: 'MONDAY';
      open: 'string';
      close: 'string';
    },
    {
      dayOfWeek: 'TUESDAY';
      open: 'string';
      close: 'string';
    },
    {
      dayOfWeek: 'WEDNESDAY';
      open: 'string';
      close: 'string';
    },
    {
      dayOfWeek: 'THURSDAY';
      open: 'string';
      close: 'string';
    },
    {
      dayOfWeek: 'FRIDAY';
      open: 'string';
      close: 'string';
    },
    {
      dayOfWeek: 'SATURDAY';
      open: 'string';
      close: 'string';
    },
    {
      dayOfWeek: 'SUNDAY';
      open: 'string';
      close: 'string';
    }
  ];
};

export type CompactPlaceType = {
  id: number;
  name: string;
  tags: string[];
  rating: number;
  isOpen: boolean;
};

export type ReviewType = {
  id: number;
  rating: number;
  content: string;
  imageIds: number[];
  tags: PlaceConditionType;
  userId: number;
  userNickname: string;
  createdAt: string;
  updatedAt: string;
};

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

export type PlaceConditionType = 'CLEAN' | 'WIFI' | 'SEAT' | 'TEMPERATURE' | 'TABLE' | 'QUIET';

export type LinkType = 'INSTAGRAM' | 'BLOG' | 'WEB';

export type DayType = keyof PlaceType['businessHours'];

export type TabType = {
  id: number;
  isSelected: boolean;
  children: string;
};

export type PlaceShortItem = {
  id: number;
  name: string;
  tags: string[];
  rating: number;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  createdAt: string;
  updatedAt: string;
};

export type PlaceShortData = {
  data: {
    places: PlaceShortItem[];
  };
};

export type ImageType = {
  url: string;
  width: number;
  height: number;
  extension: string;
};

export type PlacesAroundType = {
  latitude: number;
  longitude: number;
  latitudeBound: number;
  longitudeBound: number;
};
