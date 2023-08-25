import { useSheetContext } from '../SheetProvider';
import { useGetPlacesAround } from '@/apis/place';
import { Loading } from '@/components';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import { getCoordinates } from '@/utils/getCoordinates';
import { useMap } from 'react-kakao-maps-sdk';

export default function SearchButton() {
  const { isBottomSheetUp, setSelectedPlaceId } = useSheetContext();
  const { coordinates, setCoordinates } = useCoordinatesStore();
  const map = useMap();

  const { isLoading } = useGetPlacesAround(coordinates);

  const handleSearchClick = () => {
    setSelectedPlaceId(null);
    setCoordinates(getCoordinates(map));
  };

  return (
    <>
      {!isBottomSheetUp && (
        <button
          className="fixed left-1/2 top-[7.75rem] z-30 w-[138px] -translate-x-1/2 rounded-full bg-white py-2.5 text-body2 text-bk100 drop-shadow-md transition-colors active:bg-bk10"
          onClick={handleSearchClick}
          disabled={isLoading}
        >
          이 지역에서 재검색
        </button>
      )}
      {isLoading && <Loading />}
    </>
  );
}
