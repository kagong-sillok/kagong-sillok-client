export const Keys = Object.freeze({
  reviews: (placeId: number) => ['reviews', placeId],
  memberReviews: (memberId: number) => ['memberReviews', memberId],
  deleteReview: (placeId: number) => ['deleteReview', placeId],
  reviewImages: (placeId: number) => ['reviewImages', placeId],
});
