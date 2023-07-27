export type UserData = { name: string; time: string };

export type PageType = 'PLACE' | 'RECORD';

export type ViewType = 'BOOKMARKS' | 'REVIEWS' | 'TIMELINE' | 'MAP';

export type CalendarType = 'MONTH' | 'WEEK';

export type RecordItem = {
  id: number;
  name: string;
  content: string;
  latitude: number;
  longitude: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  time: string;
};

export type RecordData = {
  data: RecordItem[];
};
