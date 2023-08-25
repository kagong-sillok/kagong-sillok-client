import { useSheetContext } from '../SheetProvider';
import { useGetPlaceConditions } from '@/apis/place';
import { Tab } from '@/components';

export default function TagList() {
  const { selectedTagId, setSelectedTagId } = useSheetContext();

  const { data: placeConditionsData } = useGetPlaceConditions();

  return (
    <div className="flex !w-full flex-row gap-1 overflow-scroll px-4 scrollbar-hide">
      <Tab id={0} isSelected={selectedTagId === 0} setSelectedTab={setSelectedTagId}>
        전체
      </Tab>
      {placeConditionsData.tags.map((tag) => (
        <Tab
          key={tag.id}
          id={tag.id}
          isSelected={tag.id === selectedTagId}
          setSelectedTab={setSelectedTagId}
        >
          {tag.tagContent}
        </Tab>
      ))}
    </div>
  );
}
