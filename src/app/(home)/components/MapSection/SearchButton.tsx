import { useSheetContext } from '../SheetProvider';

interface SearchButtonProps {
  onClick: () => void;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  const { isBottomSheetUp } = useSheetContext();

  return (
    <>
      {!isBottomSheetUp && (
        <button
          className="fixed left-1/2 top-[7.75rem] z-30 w-[138px] -translate-x-1/2 rounded-full bg-white py-2.5 text-body2 text-bk100 drop-shadow-md transition-colors active:bg-bk10"
          onClick={onClick}
        >
          이 지역에서 재검색
        </button>
      )}
    </>
  );
}
