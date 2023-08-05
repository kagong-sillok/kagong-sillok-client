import { TopNavigationBar } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ReviewTopNavigationBar() {
  const router = useRouter();

  return (
    <TopNavigationBar
      title="리뷰더보기"
      onBackClick={() => router.back()}
      rightNode={
        <Image
          src="/assets/icons/28/Close.svg"
          alt="Close"
          width={28}
          height={28}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
      }
    />
  );
}
