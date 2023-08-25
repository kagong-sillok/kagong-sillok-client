'use client';
import { Button, Spacing } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <main>
      <header className="fixed top-0 z-20 flex h-14 w-full min-w-[360px] max-w-[448px] justify-end py-[14px] pr-6">
        <Link href="/">
          <Image src="/assets/icons/28/Close.svg" alt="close" width={28} height={28} />
        </Link>
      </header>
      <div className="flex h-screen flex-col justify-center px-6">
        <h3 className="text-head3">오류가 발생했습니다!</h3>
        <Spacing size={8} />
        <p className="text-caption text-bk40">
          존재하지 않는 주소를 입력하셨거나, <br />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </p>
        <Spacing size={70} />
        <Image src="/assets/icons/404.svg" alt="404" width={320} height={250} className="mx-auto" />
        <Link href="/">
          <Button className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full min-w-[360px] max-w-[448px]">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </main>
  );
}
