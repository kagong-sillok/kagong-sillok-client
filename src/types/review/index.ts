export interface Review {
  id: number;
  rating: number;
  content: string;
  imageIds: number[];
  tagIds: number[];
  memberId: number;
  placeId: number;
  memberNickName: string;
  writtenAt: string;
}

export interface ReviewPayload {
  rating: number;
  content: string;
  imageIds: number[];
  reviewTagIds: number[];
  memberId: number;
  placeId: number;
}
