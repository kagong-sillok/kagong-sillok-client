import Image from 'next/image';

interface IconButtonProps {
  name: string;
  src: string;
  onClick?: () => void;
}

export default function ShareIcon({ name, src, onClick }: IconButtonProps) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center" onClick={onClick}>
      <button className="mb-[5px] flex h-10 w-10 items-center justify-center rounded-full border border-bk10">
        <Image src={src} alt={name} width={28} height={28} />
      </button>
      <p className="text-[10px] text-bk100">{name}</p>
    </div>
  );
}
