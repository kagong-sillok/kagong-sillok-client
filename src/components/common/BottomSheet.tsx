import { forwardRef } from 'react';
import Sheet from 'react-modal-sheet';

import type { SheetRef } from 'react-modal-sheet';
import type { SheetProps } from 'react-modal-sheet/dist/types';

interface BottomSheetProps extends SheetProps {
  className?: string;
  isBackDrop?: boolean;
}

function BottomSheet(
  { isOpen, onClose, children, className, isBackDrop = false, ...props }: BottomSheetProps,
  ref: React.ForwardedRef<SheetRef | undefined | null>
) {
  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      className="!z-40 mx-auto w-full min-w-[360px] max-w-[448px]"
      onClose={onClose}
      {...props}
    >
      <Sheet.Container>
        <Sheet.Header>
          <div className="flex h-4 items-center justify-center">
            <div className="h-1 w-10 rounded-full bg-bk10" />
          </div>
        </Sheet.Header>
        <Sheet.Content className={`scrollbar-hide ${className ?? ''}`}>{children}</Sheet.Content>
      </Sheet.Container>
      {isBackDrop ? <Sheet.Backdrop onTap={onClose} className="!bg-[rgba(0,0,0,0.6)]" /> : <></>}
    </Sheet>
  );
}

export default forwardRef(BottomSheet);
