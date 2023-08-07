export interface Review {
  id: number;
  rating: number;
  content: string;
  imageIds: number[];
  tagIds: number[];
  memberId: number;
  placeId: number;
  memberNickname: string;
  writtenAt: string;
}

export interface ReviewPayload {
  rating: number;
  content: string;
  imageIds: number[];
  reviewtagIds: number[];
  memberId: number;
  placeId: number;
}
