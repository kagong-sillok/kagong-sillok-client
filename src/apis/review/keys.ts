export const Keys = Object.freeze({
  reviews: (placeId: number) => ['reviews', placeId],
  memberReviews: (memberId: number) => ['memberReviews', memberId],
  reviewImages: (placeId: number) => ['reviewImages', placeId],
});
