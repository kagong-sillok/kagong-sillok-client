import { ImageObjectWithId } from '../Image';
import { BusinessHours, LinkType } from '../place';

export interface StudyRecord {
  id: number;
  placeName: string;
  latitude: number;
  longitude: number;
  studyDate: string; // '2023-07-27'
  description: string;
  duration: number;
  images: ImageObjectWithId[];
  writtenAt: string; // '2023-07-27T15:21:09.332Z'
}

export interface TimelineRecord {
  id: number;
  placeName: string;
  studyDate: string; // '2023-07-27'
  description: string;
  duration: number;
  images: ImageObjectWithId[];
  writtenAt: string; // '2023-07-27T15:21:09.332Z'
}

export interface PlaceRecord {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  images: ImageObjectWithId[];
  phone: string;
  links: {
    linkType: LinkType;
    url: string;
  }[];
  businessHours: BusinessHours;
}

export interface MemberRecord {
  id: number;
  placeName: string;
  studyDate: string; // '2023-07-27'
  description: string;
  duration: number;
  images: ImageObjectWithId[];
  writtenAt: string; // '2023-07-27T15:21:09.332Z'
}

export interface TimeLineDate {
  year: number;
  month: number;
}
