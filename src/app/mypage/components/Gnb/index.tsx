import Image from 'next/image';

function Gnb({
  onBackClick,
  onCloseClick,
  title,
}: {
  onBackClick: () => void;
  onCloseClick: () => void;
  title?: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-3.5">
      <div className="flex items-center justify-start gap-x-3">
        <Image
          src="/assets/icons/28/back.svg"
          alt="back"
          width={28}
          height={28}
          onClick={onBackClick}
          className="cursor-pointer"
        />
        {title && <div className="text-button1">{title}</div>}
      </div>
      <Image
        src="/assets/icons/28/close.svg"
        alt="close"
        width={28}
        height={28}
        onClick={onCloseClick}
        className="cursor-pointer"
      />
    </div>
  );
}
export default Gnb;
