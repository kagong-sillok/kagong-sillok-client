/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

interface HeaderProps {
  name?: string;
  className?: string;
  onBackClick?: () => void;
  rightIcons?: React.ComponentProps<typeof Image>[];
}

export default function Header({ name, className, onBackClick, rightIcons }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 z-20 flex h-14 w-full min-w-[360px] max-w-[448px] justify-between bg-white px-6 py-3.5 ${
        className ?? ''
      }`}
    >
      <div className="flex items-center">
        <Image
          src="/assets/icons/28/Back.svg"
          alt="Back"
          width={28}
          height={28}
          className="cursor-pointer"
          onClick={onBackClick}
        />
        {name && <p className="ml-3 text-button1">{name}</p>}
      </div>
      <div className="flex items-center gap-3">
        {rightIcons?.map((icon, index) => (
          <Image key={index} {...icon} className="cursor-pointer" />
        ))}
      </div>
    </header>
  );
}
