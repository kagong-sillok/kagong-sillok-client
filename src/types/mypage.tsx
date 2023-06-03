export type UserData = { name: string; time: string };

export type PageType = 'place' | 'record';

export type ViewType = 'bookmarks' | 'reviews' | 'timeline' | 'map';

export type ReviewItem = {
  id: number;
  rating: number;
  content: string;
  images: string[];
  tags: string[];
  userId: number;
  userNickname: string;
  createdAt: string;
  updatedAt: string;
};

export type ReviewData = {
  data: ReviewItem[];
};

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
