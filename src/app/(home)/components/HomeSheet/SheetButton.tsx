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
            'absolute left-1/2 z-[45] w-[84px] -translate-x-1/2 rounded-full bg-bk100 py-2.5 text-body2 text-white drop-shadow-md transition-colors active:bg-bk80',
            {
              'bottom-[16px]': isBottomSheetUp,
              'bottom-[81px]': !isBottomSheetUp,
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
