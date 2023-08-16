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
