import ReactQueryProvider from '../providers/ReactQueryProvider';
import localFont from 'next/font/local';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="mx-auto h-full min-h-screen w-full min-w-[360px] max-w-[448px] bg-background">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
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
