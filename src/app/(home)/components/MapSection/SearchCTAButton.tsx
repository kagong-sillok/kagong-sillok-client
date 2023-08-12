import { useSheetContext } from '../SheetProvider';
import { useCenterCoordinateStore } from '@/store/CenterCoordinateState';

interface SearchCTAButtonProps {
  mapRef?: React.MutableRefObject<kakao.maps.Map | null>;
}

export default function SearchCTAButton({ mapRef }: SearchCTAButtonProps) {
  const isBottomSheetUp = useSheetContext((state) => state.isBottomSheetUp);
  const { setCenterCoordinates } = useCenterCoordinateStore();

  const handleSearchClick = () => {
    const map = mapRef?.current as kakao.maps.Map;
    const center = map.getCenter();
    const latitude = center.getLat();
    const longitude = center.getLng();
    const latitudeBound = map.getBounds().getNorthEast().getLat() - latitude;
    const longitudeBound = map.getBounds().getNorthEast().getLng() - longitude;

    setCenterCoordinates({
      latitude,
      longitude,
      latitudeBound,
      longitudeBound,
    });
  };

  return (
    <>
      {!isBottomSheetUp && (
        <button
          className="fixed left-1/2 top-[7.75rem] z-30 w-[138px] -translate-x-1/2 rounded-full bg-white py-2.5 text-body2 text-bk100 drop-shadow-md transition-colors active:bg-bk10"
          onClick={handleSearchClick}
        >
          이 지역에서 재검색
        </button>
      )}
    </>
  );
}
