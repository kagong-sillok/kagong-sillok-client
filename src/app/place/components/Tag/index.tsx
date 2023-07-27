import { LineType } from '@/app/place/types';

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
        color: 'border-bk40 text-bk40',
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
      1: 'bg-line1',
      2: 'bg-line2',
      3: 'bg-line3',
      4: 'bg-line4',
      5: 'bg-line5',
      6: 'bg-line6',
      7: 'bg-line7',
      8: 'bg-line8',
      9: 'bg-line9',
      인천1호선: 'bg-incheonLine1',
      인천2호선: 'bg-incheonLine2',
      신분당: 'bg-sinbundangLine',
      경의중앙선: 'bg-gyeonguiJungangLine',
      경춘선: 'bg-gyeongchunLine',
      수인분당: 'bg-suinBundangLine',
      공항: 'bg-airportLine',
      신림선: 'bg-sillimLine',
      의정부: 'bg-uijeongbuLine',
      에버라인: 'bg-everLine',
      경강선: 'bg-gyeonggangLine',
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
