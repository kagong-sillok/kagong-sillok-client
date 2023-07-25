'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface KakaoButtonProps {
  className?: string;
}

export default function KakaoButton({ className }: KakaoButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`
    https://kauth.kakao.com/oauth/authorize?client_id=${process.env
      .NEXT_PUBLIC_KAKAO_CLIENT_ID!}&redirect_uri=${process.env
      .NEXT_PUBLIC_KAKAO_REDIRECT_URI!}&response_type=code
    `);
  };

  return (
    <button
      className={`flex w-full items-center justify-center bg-kakao py-3 ${className ?? ''}}`}
      onClick={handleClick}
    >
      <Image src="/assets/Icons/kakaoLogin.svg" alt="kakao-login" width={17} height={17} />
      <p className="ml-3 text-[15px] font-semibold">카카오 로그인</p>
    </button>
  );
}
