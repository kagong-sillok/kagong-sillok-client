'use client';

import { RecordItem } from './components';
import records from '../../../../../public/db/records.json';
import { Spacing } from '@/components';
import { StudyRecord, TimelineRecord } from '@/types/record';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';
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
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src="/assets/icons/36/info.svg"
          alt="info"
          width={36}
          height={36}
          className="mt-[40px]"
        />
        <Spacing size={10} />
        <p className="text-caption text-bk60">카공을 기록해 보세요.</p>
      </div>
    );
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
