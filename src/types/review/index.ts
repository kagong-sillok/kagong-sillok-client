import type { ImageObjectWithId } from '../Image';

export interface Review {
  id: number;
  rating: number;
  content: string;
  images: ImageObjectWithId[];
  tagIds: number[];
  memberId: number;
  placeId: number;
  memberNickName: string;
  writtenAt: string;
  placeName: string;
}

export interface ReviewPayload {
  rating: number;
  content: string;
  imageIds: number[];
  reviewTagIds: number[];
  memberId: number;
  placeId: number;
}

export interface ReviewImage {
  imageUrl: string;
  memberName: string;
  memberProfileUrl: string;
}

export interface ReviewImages {
  totalImageCount: number;
  reviewImages: ReviewImage[];
}
