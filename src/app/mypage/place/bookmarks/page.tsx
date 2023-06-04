import { BookmarkItem } from '@/components/mypage';

import type { PlaceShortData } from '@/types/place';

const bookmarkList: PlaceShortData = {
  data: {
    places: [
      {
        id: 1,
        name: '스타벅스 동대문공원점',
        tags: ['#조용한', '#나만알고싶은', '#노트북'],
        rating: 3,
        latitude: 123.123,
        longitude: 123.123,
        isOpen: true,
        createdAt: '',
        updatedAt: '',
      },
      {
        id: 2,
        name: '스타벅스 동대문공원점',
        tags: ['#노트북'],
        rating: 2,
        latitude: 123.123,
        longitude: 123.123,
        isOpen: true,
        createdAt: '',
        updatedAt: '',
      },
      {
        id: 3,
        name: '스타벅스 동대문공원점',
        tags: ['#조용한', '#나만알고싶은'],
        rating: 4,
        latitude: 123.123,
        longitude: 123.123,
        isOpen: true,
        createdAt: '',
        updatedAt: '',
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
