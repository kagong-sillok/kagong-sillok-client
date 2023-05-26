import Image from 'next/image';

interface KagongBoxProps {
  type: 'CLEAN' | 'WIFI' | 'SEAT' | 'TEMPERATURE' | 'TABLE' | 'QUIET';
  isFirst: boolean;
}

const statusList = [
  {
    type: 'CLEAN',
    text: '청결',
    title: '호텔급 청결',
    iconSrc: '/assets/icons/32/Cleaning.svg',
  },
  {
    type: 'WIFI',
    text: '와이파이',
    title: '빵빵 터짐',
    iconSrc: '/assets/icons/32/Internet.svg',
  },
  {
    type: 'SEAT',
    text: '좌석',
    title: '편안한 의자',
    iconSrc: '/assets/icons/32/Livingroom.svg',
  },
  {
    type: 'TEMPERATURE',
    text: '온도',
    title: '쾌적상쾌',
    iconSrc: '/assets/icons/32/Aircon.svg',
  },
  {
    type: 'TABLE',
    text: '테이블',
    title: '넓은 테이블',
    iconSrc: '/assets/icons/32/table.svg',
  },
  {
    type: 'QUIET',
    text: '소음',
    title: '조용한 공간',
    iconSrc: '/assets/icons/32/Quait.svg',
  },
];

export default function KagongBox({ type, isFirst }: KagongBoxProps) {
  const status = statusList.find((item) => item.type === type);

  if (!status) return null;

  return (
    <div
      className={`flex h-[156px] w-[130px] shrink-0 flex-col justify-between px-4 pb-5 pt-4 shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] ${
        isFirst ? 'bg-violet/default text-white' : 'bg-white text-black'
      }`}
    >
      <Image
        src={status.iconSrc}
        alt={status.text}
        width={32}
        height={32}
        className={`filter ${isFirst ? 'invert' : ''}`}
      />
      <div>
        <p className={`text-body2 ${isFirst ? '' : 'text-violet/default'}`}>{status.text}</p>
        <p className="text-sub1">{status.title}</p>
      </div>
    </div>
  );
}
