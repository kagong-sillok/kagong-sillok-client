import api from '@/apis/config/instance';

import type { StudyRecordPayload } from '@/types/record';

export const postRecord = async (payload: StudyRecordPayload) => {
  const { data } = await api.post('api/v1/study-records', {
    json: payload,
  });

  return data;
};
