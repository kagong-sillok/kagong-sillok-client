'use client';

import { RecordItem } from './components';
import records from '../../../../../public/db/records.json';
import { StudyRecord } from '@/types/record';
import React from 'react';

function RecordList() {
  const recordList: APIResponse<{ studyRecords: StudyRecord[] }> = records; //TODO: API로 변경
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 p-6">
      {recordList.data.studyRecords.map((item) => {
        return <RecordItem key={item.id} data={item} />;
      })}
    </div>
  );
}

export default RecordList;
