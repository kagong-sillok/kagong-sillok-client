import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { forwardRef, useRef } from 'react';
import Sheet from 'react-modal-sheet';

import type { SheetRef } from 'react-modal-sheet';
import type { SheetProps } from 'react-modal-sheet/dist/types';

interface BottomSheetProps extends SheetProps {
  className?: string;
  hasBackDropOpacity?: boolean;
}

function BottomSheet(
  { isOpen, onClose, children, className, hasBackDropOpacity = false, ...props }: BottomSheetProps,
  ref: React.ForwardedRef<SheetRef | undefined | null>
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, onClose);

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      className={`mx-auto w-full min-w-[360px] max-w-[448px] ${className ?? ''}`}
      onClose={onClose}
      {...props}
    >
      <Sheet.Container ref={containerRef}>
        <Sheet.Header>
          <div className="flex h-4 items-center justify-center">
            <div className="h-1 w-10 rounded-full bg-bk10" />
          </div>
        </Sheet.Header>
        <Sheet.Content className="scrollbar-hide">{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        className={`${hasBackDropOpacity ? '!bg-[rgba(0,0,0,0.6)]' : '!bg-[rgba(0,0,0,0)]'}`}
      />
    </Sheet>
  );
}

export default forwardRef(BottomSheet);
