import Image from 'next/image';

interface RatingProps {
  rating: number | null;
  onClick: (selectRating: number) => void;
}

export default function Rating({ rating, onClick }: RatingProps) {
  const ratingText = ['별로에요', '그저 그래요', '괜찮아요', '만족해요', '최고예요'];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-[60px] items-end justify-center gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <Image
            key={item}
            src={`/assets/icons/40/emoji-rating${item}_${rating === item ? 'on' : 'off'}.svg`}
            alt={`emoji-rating${item}`}
            width={rating === item ? 60 : 40}
            height={rating === item ? 60 : 40}
            className="cursor-pointer"
            onClick={() => onClick(item)}
          />
        ))}
      </div>
      {rating !== null && <p className="text-body1">{ratingText[rating - 1]}</p>}
    </div>
  );
}
