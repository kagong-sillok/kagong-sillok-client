/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'violet/default': '#6550E7',
      'violet/pressed': '#4533B4',
      brown: '#E19678',
      yellow: '#FFB400',
      blue: '#4B64FF',
      black: '#00000A',
      bk100: '#00000A',
      bk90: '#1A1A23',
      bk80: '#33333B',
      bk70: '#4C4C53',
      bk60: '#66666C',
      bk50: '#808084',
      bk40: '#99999D',
      bk30: '#B3B3B6',
      bk20: '#CCCCCE',
      bk10: '#E5E5E6',
      white: '#FFFFFF',
      background: '#F2F4F6',
      alert: '#DB304A',
      line1: '#1C3294',
      line2: '#61B257',
      line3: '#E87040',
      line4: '#486FCE',
      line5: '#813FB1',
      line6: '#90531E',
      line7: '#626D1B',
      line8: '#D43B6E',
      line9: '#B9A139',
      incheonLine1: '#4670EB',
      incheonLine2: '#F3BD62',
      sinbundangLine: '#9B2230',
      gyeonguiJungangLine: '#8DC2A7',
      gyeongchunLine: '#53A782',
      suinBundangLine: '#E3B53D',
      airportLine: '#83B5E2',
      sillimLine: '#1C3294',
      uijeongbuLine: '#EF9530',
      everLine: '#91CC81',
      gyeonggangLine: '#4670EB',
    },
    fontSize: {
      head1: [
        '2.25rem',
        {
          lineHeight: '2.75rem',
          fontWeight: '600',
        },
      ],
      head2: [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '600',
        },
      ],
      head3: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '700',
        },
      ],
      head4: [
        '1.125rem',
        {
          lineHeight: '1.625rem',
          fontWeight: '700',
        },
      ],
      sub1: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
      sub2: [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '700',
        },
      ],
      body1: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
      ],
      body2: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
      ],
      button1: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '600',
        },
      ],
      button2: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '700',
        },
      ],
      caption: [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '400',
        },
      ],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
