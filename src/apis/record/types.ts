export interface StudyRecord {
  id: number;
  placeName: string;
  latitude: number;
  longitude: number;
  studyDate: string; // '2023-07-27'
  description: string;
  duration: number;
  imageIds: number[];
  writtenAt: string; // '2023-07-27T15:21:09.332Z'
}

export type UserData = {
  name: string;
  time: string;
};

export type PageType = 'PLACE' | 'RECORD';

export type ViewType = 'BOOKMARKS' | 'REVIEWS' | 'TIMELINE' | 'MAP';

export type CalendarType = 'MONTH' | 'WEEK';
