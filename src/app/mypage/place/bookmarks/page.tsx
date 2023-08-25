import { BookmarkItem } from './components';

import type { Place } from '@/types/place';

const bookmarkList: APIResponse<{ places: Place[] }> = {
  data: {
    places: [
      {
        id: 1,
        name: '스타벅스 동대문공원점',
        address: '서울 중구 장충단로 229',
        latitude: 37.565289,
        longitude: 127.001285,
        images: [],
        reviewTags: [],
        ratingAverage: 4,
        phone: '02-1234-1234',
        links: [{ linkType: 'WEB', url: 'https://www.starbucks.co.kr/' }],
        businessHours: [
          { dayOfWeek: 'MONDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'TUESDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'WEDNESDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'THURSDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'FRIDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'SATURDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'SUNDAY', open: '09:00:00', close: '22:00:00' },
        ],
      },
      {
        id: 2,
        name: '스타벅스 천호로데오점',
        address: '서울 강동구 천호대로 1037',
        latitude: 37.53777,
        longitude: 127.12722,
        images: [],
        reviewTags: [],
        ratingAverage: 3,
        phone: '02-1234-1234',
        links: [{ linkType: 'WEB', url: 'https://www.starbucks.co.kr/' }],
        businessHours: [
          { dayOfWeek: 'MONDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'TUESDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'WEDNESDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'THURSDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'FRIDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'SATURDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'SUNDAY', open: '09:00:00', close: '22:00:00' },
        ],
      },
      {
        id: 3,
        name: '스타벅스 연신내점',
        address: '서울 은평구 통일로 867',
        latitude: 37.5620135,
        longitude: 127.0016985,
        images: [],
        ratingAverage: 2,
        reviewTags: [],
        phone: '02-1234-1234',
        links: [{ linkType: 'WEB', url: 'https://www.starbucks.co.kr/' }],
        businessHours: [
          { dayOfWeek: 'MONDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'TUESDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'WEDNESDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'THURSDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'FRIDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'SATURDAY', open: '09:00:00', close: '22:00:00' },
          { dayOfWeek: 'SUNDAY', open: '09:00:00', close: '22:00:00' },
        ],
      },
    ],
  },
};

function Bookmarks() {
  return (
    <div className="px-6">
      {bookmarkList.data.places.map((item, i) => {
        return (
          <BookmarkItem
            key={item.id}
            data={item}
            isLast={bookmarkList.data.places.length - 1 === i}
          />
        );
      })}
    </div>
  );
}

export default Bookmarks;
