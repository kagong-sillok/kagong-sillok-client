import RecordItem from '@/components/mypage/RecordItem';

import type { RecordData } from '@/types/mypage';

const recordList: RecordData = {
  data: [
    {
      id: 1,
      name: '스타벅스 동대문공원점',
      content: '모각코',
      latitude: 123.123,
      longitude: 123.123,
      image: 'imageUrl',
      createdAt: '2023-06-01T00:04:00',
      updatedAt: '2023-06-01T00:00:00',
      time: '2023-06-01T00:04:00',
    },
    {
      id: 2,
      name: '스타벅스 동대문공원점',
      content: '모각코',
      latitude: 123.123,
      longitude: 123.123,
      createdAt: '2023-06-01T01:20:00',
      image: 'imageUrl',
      updatedAt: '2023-06-01T00:00:00',
      time: '2023-06-01T01:20:00',
    },
  ],
};

function Timeline() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 p-6">
      {recordList.data.map((item) => {
        return <RecordItem key={item.id} data={item} />;
      })}
    </div>
  );
}

export default Timeline;
