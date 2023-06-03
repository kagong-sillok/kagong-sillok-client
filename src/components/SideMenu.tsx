import Image from 'next/image';
import { ReactNode } from 'react';

const IconButton = ({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex w-20 cursor-pointer flex-col items-center justify-center gap-2"
      onClick={onClick}
    >
      {icon}
      <div>{label}</div>
    </div>
  );
};

const pages: { label: string; link: string }[] = [
  { label: '카공기록', link: '1' },
  { label: '찜한 카페', link: '2' },
  { label: '작성한 기록', link: '3' },
];

export default function SideMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return <></>;
  return (
    <>
      <Image
        src="/assets/icons/28/Close.svg"
        alt="Close"
        width={28}
        height={28}
        className="absolute left-[308px] top-[14px] z-50 cursor-pointer invert filter"
        onClick={onClose}
      />
      <div
        className="absolute left-0 top-0 z-40 h-full w-full cursor-pointer bg-bk100 opacity-60"
        onClick={onClose}
      />
      <div className="absolute left-0 top-0 z-50 h-full w-72 bg-background px-6 py-5">
        <div className="mt-5 flex flex-col items-center justify-center gap-5">
          <div className="flex w-full items-center justify-start gap-3">
            <div className="h-[52px] w-[52px] rounded-full bg-bk40" />
            <div className="flex flex-col items-start justify-center gap-0.5">
              <div className="text-sub1">라떼처돌이</div>
              <div className="text-caption text-bk40">kimkim@kakao.com</div>
            </div>
          </div>
          <div className="flex w-full items-center justify-start gap-4 bg-bk100 p-4">
            <div className="flex w-[88px] flex-col items-start justify-center gap-0.5 text-background">
              <div className="text-caption opacity-60">카공실록 방문일</div>
              <div className="text-sub2 ">78일</div>
            </div>
            <div className="h-10 w-px bg-background opacity-30" />
            <div className="flex w-[88px] flex-col items-start justify-center  gap-0.5 text-background">
              <div className="text-caption opacity-60">카공기록</div>
              <div className="text-sub2 ">8시간 20분</div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between text-caption">
            {pages.map((item) => {
              return (
                <IconButton
                  key={item.link}
                  label={item.label}
                  icon={
                    <Image
                      src="/assets/icons/28/Bookmark.svg"
                      alt="Bookmark"
                      width={28}
                      height={28}
                    />
                  }
                  onClick={() => console.log(item.link)}
                />
              );
            })}
          </div>
        </div>
        <div className="my-6 h-px w-full bg-bk10" />
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex w-full cursor-pointer items-center justify-between">
            <div className="flex items-start justify-start gap-[5px]">
              <div className="text-sub2">공지사항</div>
              <div className="h-[6px] w-[6px] rounded-full bg-violet/default" />
            </div>
            <Image
              src="/assets/icons/16/Arrow-right.svg"
              alt="Arrow-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex w-full cursor-pointer items-center justify-between">
            <div className="text-sub2">자주 묻는 질문</div>
            <Image
              src="/assets/icons/16/Arrow-right.svg"
              alt="Arrow-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-sub2">버전정보</div>
            <div className="text-caption text-bk40">1.3.6</div>
          </div>
        </div>
      </div>
    </>
  );
}
