import React from 'react';

function ConfirmModal({
  message,
  onOk,
  onCancle,
}: {
  message: React.ReactNode;
  onOk: () => void;
  onCancle?: () => void;
}) {
  return (
    <>
      <div
        className="absolute left-0 top-0 z-[70] h-screen w-full cursor-pointer bg-bk100 opacity-60"
        onClick={onCancle}
      />
      <div className="absolute left-2/4 top-1/2 z-[80] w-[296px] translate-x-[-50%] translate-y-[-50%] bg-white">
        <div className="px-8 py-6">{message}</div>
        <div className="flex justify-end self-center p-2.5">
          {onCancle && (
            <div
              className="cursor-pointer bg-white px-[31px] py-[10px] text-body2 text-bk60"
              onClick={onCancle}
            >
              취소
            </div>
          )}
          <div
            className="cursor-pointer bg-bk100 px-[31px] py-[10px] text-button2 text-white"
            onClick={onOk}
          >
            확인
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmModal;
