/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import localFont from 'next/font/local';
import Script from 'next/script';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="relative mx-auto h-full min-h-screen w-full min-w-[360px] max-w-[448px] bg-background scrollbar-hide">
        <ReactQueryProvider>
          <div className="min-h-screen bg-white">{children}</div>
        </ReactQueryProvider>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
