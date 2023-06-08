import Image from 'next/image';

interface KakaoButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function KakaoButton({ onClick, className }: KakaoButtonProps) {
  return (
    <button
      className={`flex w-full items-center justify-center bg-kakao py-3 ${className ?? ''}`}
      onClick={onClick}
    >
      <Image src="/assets/Icons/kakaoLogin.svg" alt="kakao-login" width={17} height={17} />
      <p className="ml-3 text-[15px] font-semibold">카카오 로그인</p>
    </button>
  );
}
