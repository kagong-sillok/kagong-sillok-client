export interface StudyRecordPayload {
  memberId: number;
  placeId: number;
  studyYear: number;
  studyMonth: number;
  studyDay: number;
  duration: number;
  description: string;
  imageIds: number[];
}
