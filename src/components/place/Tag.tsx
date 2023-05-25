import type { LineType } from '@/types/place';

interface OpenClosedProps {
  type: 'OPEN' | 'CLOSED';
}

interface SubwayProps {
  line: LineType;
}

const Tag = {
  OpenClosed: function ({ type }: OpenClosedProps) {
    const status = {
      OPEN: {
        text: '영업중',
        color: 'border-blue text-blue',
      },
      CLOSED: {
        text: '영업종료',
        color: 'text-black border-opacity-40 text-opacity-40',
      },
    }[type];

    return (
      <span
        className={`border px-[7px] py-1 text-[11px] font-bold leading-[13.13px] ${status.color}`}
      >
        {status.text}
      </span>
    );
  },
  Subway: function ({ line }: SubwayProps) {
    const color = {
      1: 'bg-[#1C3294]',
      2: 'bg-[#61B257]',
      3: 'bg-[#E87040]',
      4: 'bg-[#486FCE]',
      5: 'bg-[#813FB1]',
      6: 'bg-[#90531E]',
      7: 'bg-[#626D1B]',
      8: 'bg-[#D43B6E]',
      9: 'bg-[#B9A139]',
      인천1호선: 'bg-[#4670EB]',
      인천2호선: 'bg-[#F3BD62]',
      신분당: 'bg-[#9B2230]',
      경의중앙선: 'bg-[#8DC2A7]',
      경춘선: 'bg-[#53A782]',
      수인분당: 'bg-[#E3B53D]',
      공항: 'bg-[#83B5E2]',
      신림선: 'bg-[#1C3294]',
      의정부: 'bg-[#EF9530]',
      에버라인: 'bg-[#91CC81]',
      경강선: 'bg-[#4670EB]',
    }[line];

    return (
      <span
        className={`rounded-full px-[5px] py-[2px] text-[11px] font-normal leading-[13.13px] text-white ${color}`}
      >
        {line}
      </span>
    );
  },
};

export default Tag;
