import Image from 'next/image';

interface TopNavigationBarProps {
  title?: string;
  onBackClick?: () => void;
  right?: React.ReactNode;
  className?: string;
  isSpacing?: boolean;
}

export default function TopNavigationBar({
  title,
  onBackClick,
  right,
  className = '',
  isSpacing = true,
}: TopNavigationBarProps) {
  return (
    <>
      <header
        className={`fixed top-0 z-20 flex h-14 w-full min-w-[360px] max-w-[448px] justify-between bg-white px-6 py-3.5 ${className}`}
      >
        <div className="flex items-center">
          <Image
            src="/assets/icons/28/Back.svg"
            alt="back"
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={onBackClick}
          />
          {title && <p className="ml-3 text-button1">{title}</p>}
        </div>
        <div className="flex items-center gap-3">{right}</div>
      </header>
      {isSpacing && <div className="h-14" />}
    </>
  );
}
