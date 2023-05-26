export type PlaceType = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  images: string[];
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

export type DayType =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';