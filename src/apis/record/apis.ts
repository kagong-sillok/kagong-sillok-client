import api from '../config/instance';
import { Place } from '@/types/place';

import type { StudyRecordPayload } from './types';
import type { MemberRecord, PlaceRecord, TimelineRecord } from '@/types/record';

export const getTimelineRecords = async (memberId: number, year: number, month: number) => {
  const { data } = await api.get<{ studyRecords: TimelineRecord[] }>(
    `api/v1/study-records/timelines/${memberId}`,
    {
      searchParams: { year, month },
    }
  );
  return data;
};

export const getPlaceRecords = async (memberId: number) => {
  const { data } = await api.get<{ places: Place[] }>(`api/v1/study-records/places/${memberId}`);
  return data;
};

export const getMemberRecords = async (memberId: number) => {
  const { data } = await api.get<{ studyRecords: MemberRecord[] }>(
    `api/v1/study-records/member/${memberId}`
  );
  return data;
};

export const postStudyRecord = async (payload: StudyRecordPayload) => {
  const { data } = await api.post('api/v1/study-records', {
    json: payload,
  });
  return data;
};
