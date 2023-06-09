import Image from 'next/image';

interface KakaoButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
}

export default function KakaoButton({ onClick, className, ...props }: KakaoButtonProps) {
  return (
    <button
      className={`flex w-full items-center justify-center bg-kakao py-3 ${className ?? ''}}`}
      onClick={onClick}
      {...props}
    >
      <Image src="/assets/Icons/kakaoLogin.svg" alt="kakao-login" width={17} height={17} />
      <p className="ml-3 text-[15px] font-semibold">카카오 로그인</p>
    </button>
  );
}
