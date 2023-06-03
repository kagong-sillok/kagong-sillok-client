export type PlaceType = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  images: ImageType[];
  tags: string[]; // ['#조용한', '#나만알고싶은', '#노트북']
  isOpen: boolean;
  phone: string; // 02-1234-1234
  links: {
    linkType: 'INSTAGRAM' | 'BLOG' | 'WEB';
    url: string;
  }[];
  businessHours: {
    monday: {
      open: string; // 09:00:00
      close: string; // 23:00:00
    };
    tuesday: {
      open: string;
      close: string;
    };
    wednesday: {
      open: string;
      close: string;
    };
    thursday: {
      open: string;
      close: string;
    };
    friday: {
      open: string;
      close: string;
    };
    saturday: {
      open: string;
      close: string;
    };
    sunday: {
      open: string;
      close: string;
    };
  };
};

export type ReviewType = {
  id: number;
  rating: number;
  content: string;
  images: ImageType[];
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

export type ImageType = {
  url: string;
  width: number;
  height: number;
  extension: string;
};
