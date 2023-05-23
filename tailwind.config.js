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
      white: '#FFFFFF',
      background: '#F2F4F6',
      alert: '#DB304A',
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
  plugins: [],
};
