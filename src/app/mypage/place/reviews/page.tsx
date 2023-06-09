import { ReviewItem } from '@/components/mypage';

import type { ReviewData } from '@/types/mypage';

const reviewList: ReviewData = {
  data: [
    {
      id: 1,
      rating: 1,
      content:
        '카공보다는 감성 카페에 더 가까워요. 테이블이 낮아서 공부하는데 불편했습니다. 장시간 공부하기는 어려워요.',
      images: ['imageUrl', 'imageUrl'], // 5개까지
      tags: [
        '', // 협의 필요 'CLEAN' | 'WIFI' | 'SEAT' | 'TEMPERATURE' | 'TABLE' | 'QUIET'
        '',
        '',
      ],
      userId: 1,
      userNickname: '~~',
      createdAt: '2023-06-01T00:00:00',
      updatedAt: '2023-06-01T00:00:00',
    },

    {
      id: 2,
      rating: 1,
      content:
        '카공보다는 감성 카페에 더 가까워요. 테이블이 낮아서 공부하는데 불편했습니다. 장시간 공부하기는 어려워요.',
      images: ['imageUrl', 'imageUrl'], // 5개까지
      tags: [
        '', // 협의 필요 'CLEAN' | 'WIFI' | 'SEAT' | 'TEMPERATURE' | 'TABLE' | 'QUIET'
        '',
        '',
      ],
      userId: 1,
      userNickname: '~~',
      createdAt: '2023-06-01T00:00:00',
      updatedAt: '2023-06-01T00:00:00',
    },
    {
      id: 3,
      rating: 1,
      content:
        '카공보다는 감성 카페에 더 가까워요. 테이블이 낮아서 공부하는데 불편했습니다. 장시간 공부하기는 어려워요.',
      images: ['imageUrl', 'imageUrl'], // 5개까지
      tags: [
        '', // 협의 필요 'CLEAN' | 'WIFI' | 'SEAT' | 'TEMPERATURE' | 'TABLE' | 'QUIET'
        '',
        '',
      ],
      userId: 1,
      userNickname: '~~',
      createdAt: '2023-06-01T00:00:00',
      updatedAt: '2023-06-01T00:00:00',
    },
    {
      id: 4,
      rating: 1,
      content:
        '카공보다는 감성 카페에 더 가까워요. 테이블이 낮아서 공부하는데 불편했습니다. 장시간 공부하기는 어려워요.',
      images: ['imageUrl', 'imageUrl'], // 5개까지
      tags: [
        '', // 협의 필요 'CLEAN' | 'WIFI' | 'SEAT' | 'TEMPERATURE' | 'TABLE' | 'QUIET'
        '',
        '',
      ],
      userId: 1,
      userNickname: '~~',
      createdAt: '2023-06-01T00:00:00',
      updatedAt: '2023-06-01T00:00:00',
    },
    {
      id: 5,
      rating: 1,
      content:
        '카공보다는 감성 카페에 더 가까워요. 테이블이 낮아서 공부하는데 불편했습니다. 장시간 공부하기는 어려워요.',
      images: ['imageUrl', 'imageUrl'], // 5개까지
      tags: [
        '', // 협의 필요 'CLEAN' | 'WIFI' | 'SEAT' | 'TEMPERATURE' | 'TABLE' | 'QUIET'
        '',
        '',
      ],
      userId: 1,
      userNickname: '~~',
      createdAt: '2023-06-01T00:00:00',
      updatedAt: '2023-06-01T00:00:00',
    },
  ],
};

function Reviews() {
  return (
    <div className="px-6">
      {reviewList.data.map((item, i) => {
        return <ReviewItem key={item.id} data={item} isLast={reviewList.data.length - 1 === i} />;
      })}
    </div>
  );
}

export default Reviews;
