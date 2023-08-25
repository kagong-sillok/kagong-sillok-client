'use client';

import { RecordItem } from './components';
import records from '../../../../../public/db/records.json';
import { StudyRecord, TimelineRecord } from '@/types/record';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import React from 'react';

function RecordList({ data }: { data: { studyRecords: TimelineRecord[] } | undefined }) {
  const recordList: APIResponse<{ studyRecords: StudyRecord[] }> = records; //TODO: API로 변경
  const formatData = () => {
    const data = {} as { [key: string]: StudyRecord[] };
    recordList.data.studyRecords.forEach((el) => {
      if (data[el.studyDate]) {
        data[el.studyDate].push(el);
      } else {
        data[el.studyDate] = [el];
      }
    });
    return data;
  };

  return (
    <>
      {Object.entries(formatData()).map(([key, value]) => {
        const date = format(new Date(key), 'MM월 dd일 EEEE', { locale: ko });

        return (
          <div key={key} className="flex w-full flex-col items-center justify-center gap-6 p-6">
            <div className="flex w-full items-center justify-center gap-2">
              <div className="min-w-fit flex-nowrap break-keep text-caption text-bk60">{date}</div>
              <div className="h-[1px] w-full bg-bk20" />
            </div>
            {value.map((item: StudyRecord) => {
              return <RecordItem key={item.id} data={item} />;
            })}
          </div>
        );
      })}
    </>
  );
}

export default RecordList;
