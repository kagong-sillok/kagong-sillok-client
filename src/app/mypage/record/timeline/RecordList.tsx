'use client';

import { RecordItem } from './components';
import records from '../../../../../public/db/records.json';
import { StudyRecord, TimelineRecord } from '@/types/record';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import React from 'react';

function RecordList({ data }: { data: { studyRecords: TimelineRecord[] } | undefined }) {
  const test = () => {
    const result = {} as { [key: string]: TimelineRecord[] };
    if (data?.studyRecords.length) {
      data.studyRecords.forEach((el) => {
        if (result[el.studyDate]) {
          result[el.studyDate].push(el);
        } else {
          result[el.studyDate] = [el];
        }
      });
    }
    return result;
  };

  if (!data?.studyRecords.length) {
    return <></>;
  }

  return (
    <>
      {Object.entries(test()).map(([key, value]) => {
        const date = format(new Date(key), 'MM월 dd일 EEEE', { locale: ko });

        return (
          <div key={key} className="flex w-full flex-col items-center justify-center gap-6 p-6">
            <div className="flex w-full items-center justify-center gap-2">
              <div className="min-w-fit flex-nowrap break-keep text-caption text-bk60">{date}</div>
              <div className="h-[1px] w-full bg-bk20" />
            </div>
            {value.map((item: TimelineRecord) => {
              return <RecordItem key={item.id} data={item} />;
            })}
          </div>
        );
      })}
    </>
  );
}

export default RecordList;
