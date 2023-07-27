import type { PlaceConditionType } from '@/app/place/types';

export interface Review {
  id: number;
  rating: number;
  content: string;
  imageIds: number[];
  tags: PlaceConditionType[]; //TODO: tagIds로 변경
  userId: number;
  userNickname: string;
  createdAt: string;
  updatedAt: string;
}
