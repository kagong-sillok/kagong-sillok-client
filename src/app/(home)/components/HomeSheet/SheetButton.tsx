import { useSheetContext } from '../SheetProvider';
import cn from '@/utils/cn';

interface SheetButtonProps {
  onClick: () => void;
}

export default function SheetButton({ onClick }: SheetButtonProps) {
  const { isBottomSheetUp, selectedPlaceId } = useSheetContext();

  return (
    <>
      {selectedPlaceId === null && (
        <button
          className={cn(
            'absolute inset-x-0 z-[45] mx-auto w-[84px] rounded-full bg-bk100 py-2.5 text-body2 text-white drop-shadow-md transition-colors active:bg-bk80',
            {
              'fixed bottom-[16px]': isBottomSheetUp,
              '-top-[72px]': !isBottomSheetUp,
            }
          )}
          onClick={onClick}
        >
          {isBottomSheetUp ? '지도보기' : '목록보기'}
        </button>
      )}
    </>
  );
}
