import Image from 'next/image';
import Link from 'next/link';

interface PlaceItemProps {
  id: number;
  name: string;
  tags: string[];
  rating: number;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  snapTo: (i: number) => void;
}

export default function PlaceItem({
  id,
  name,
  tags,
  rating,
  // latitude,
  // longitude,
  isOpen,
}: PlaceItemProps) {
  return (
    <li
      className="h-[115px] w-full"
      // onClick={() => {
      //   setCenterCoordinate({ latitude, longitude });
      //   snapTo(15);
      // }}
    >
      <Link href={`/place/${id}`} className="flex h-full justify-between p-6">
        <div className="flex flex-col">
          <p className="mb-0.5 text-sub1">{name}</p>
          <div className="mb-2 h-fit text-caption text-bk50">
            {tags.map((tag) => (
              <span key={tag} className="mr-1.5">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-1.5 text-caption text-bk100">
            <Image
              src={`/assets/icons/40/emoji-rating${Math.round(rating)}_on.svg`}
              height={16}
              width={16}
              alt="emoji"
            />
            <span className="text-bk30">•</span>
            <span>80m</span>
            <span className="text-bk30">•</span>
            <span>{isOpen ? '영업중' : '영업종료'}</span>
          </div>
        </div>
        <Image src="/assets/icons/null.svg" width={64} height={64} alt="default"></Image>
      </Link>
    </li>
  );
}
