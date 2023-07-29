'use client';

import { Monthly, Weekly, RecordItem } from './components';
import records from '../../../../../public/db/records.json';
import { useState } from 'react';

import type { CalendarType } from '@/types/mypage';
import type { StudyRecord } from '@/types/record';

function Timeline() {
  const [viewType, setViewType] = useState<CalendarType>('MONTH');

  const recordList: APIResponse<{ studyRecords: StudyRecord[] }> = records; //TODO: API로 변경

  return (
    <div>
      {viewType === 'MONTH' ? (
        <Monthly onViewChange={setViewType} />
      ) : (
        <Weekly onViewChange={setViewType} />
      )}

      <div className="flex w-full flex-col items-center justify-center gap-6 p-6">
        {recordList.data.studyRecords.map((item) => {
          return <RecordItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Timeline;
