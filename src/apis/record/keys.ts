export const Keys = Object.freeze({
  timelineRecords: (year: number, month: number) => ['timelineRecords', year, month],
  placeRecords: () => ['placeRecords'],
  memberRecords: (memberId: number) => ['memberRecords', memberId],
});
