import Image from 'next/image';

export default function ReviewBox() {
  return (
    <div className="flex gap-3.5">
      <div className="h-10 w-10 shrink-0 rounded-full bg-black bg-opacity-40"></div>
      <div className="flex flex-grow flex-col gap-4">
        <div className="flex h-10 justify-between">
          <div>
            <p className="text-body2">라떼처돌이</p>
            <div className="flex items-center">
              <Image
                src="/assets/icons/40/emoji-rating1_on.svg"
                alt="emoji"
                width={16}
                height={16}
              />
              <p className="circle relative pl-2.5 text-[12px] font-normal  text-black text-opacity-40">
                별로예요
              </p>
            </div>
          </div>
          <p className="text-caption text-black text-opacity-40">23.01.14</p>
        </div>
        <p className="text-body2">
          카공보다는 감성 카페에 더 가까워요. 테이블이 낮아서 공부하는데 불편했습니다. 장시간
          공부하기는 어려워요.
        </p>
      </div>
    </div>
  );
}
