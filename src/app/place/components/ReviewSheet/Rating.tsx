import { RATING_TEXT } from '@/app/place/constants';
import { motion } from 'framer-motion';

interface RatingProps {
  rating: number | null;
  onClick: (selectRating: number) => void;
}

export default function Rating({ rating, onClick }: RatingProps) {
  return (
    <div className="flex h-24 flex-col items-center gap-3">
      <div className="flex h-[60px] items-end justify-center gap-2">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <motion.img
            key={num}
            src={`/assets/icons/40/emoji-rating${num}_${rating === num ? 'on' : 'off'}.svg`}
            alt={`emoji-rating${num}`}
            className="cursor-pointer"
            onClick={() => onClick(num)}
            animate={{
              width: rating === num ? '60px' : '40px',
              height: rating === num ? '60px' : '40px',
            }}
          />
        ))}
      </div>
      {rating !== null && <p className="text-body1">{RATING_TEXT[rating - 1]}</p>}
    </div>
  );
}
