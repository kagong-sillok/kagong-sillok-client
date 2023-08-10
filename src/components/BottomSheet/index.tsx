'use client';
import { forwardRef } from 'react';
import Sheet from 'react-modal-sheet';

import type { SheetRef } from 'react-modal-sheet';
import type { SheetProps } from 'react-modal-sheet/dist/types';

interface SheetContentProps {
  children: React.ReactNode;
  isScrollable?: boolean;
  className?: string;
}
function SheetContent({ children, isScrollable, className }: SheetContentProps) {
  if (isScrollable) {
    return (
      <Sheet.Content>
        <Sheet.Scroller className={`scrollbar-hide ${className}`} draggableAt="top">
          {children}
        </Sheet.Scroller>
      </Sheet.Content>
    );
  }

  return <Sheet.Content className={`scrollbar-hide ${className}`}>{children}</Sheet.Content>;
}

interface BottomSheetProps extends SheetProps {
  className?: string;
  isBackDrop?: boolean;
  isScrollable?: boolean;
}

function BottomSheet(
  {
    isOpen,
    onClose,
    children,
    className = '',
    isBackDrop = false,
    isScrollable = false,
    ...props
  }: BottomSheetProps,
  ref: React.ForwardedRef<SheetRef | undefined | null>
) {
  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      className="!z-40 mx-auto w-full min-w-[360px] max-w-[448px]"
      onClose={onClose}
      tweenConfig={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
      {...props}
    >
      <Sheet.Container>
        <Sheet.Header>
          <div className="flex h-4 items-center justify-center">
            <div className="h-1 w-10 rounded-full bg-bk10" />
          </div>
        </Sheet.Header>
        <SheetContent isScrollable={isScrollable} className={className}>
          {children}
        </SheetContent>
      </Sheet.Container>
      {isBackDrop ? <Sheet.Backdrop onTap={onClose} className="!bg-[rgba(0,0,0,0.6)]" /> : <></>}
    </Sheet>
  );
}

export default forwardRef(BottomSheet);
