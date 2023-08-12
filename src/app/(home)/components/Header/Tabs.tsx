import { useGetPlaceConditions } from '@/apis/place';
import { CONDITION_LIST } from '@/app/place/constants';
import { Tab } from '@/components';
import { PlaceCondition } from '@/types/place';
import { useState } from 'react';

export default function Tabs() {
  const [selectedTabId, setSelectedTabId] = useState(0);

  const { data: placeConditionsData } = useGetPlaceConditions();

  const { tags } = placeConditionsData;

  const tagsWithAll: PlaceCondition[] = [{ id: 0, tagName: '전체', tagContent: '전체' }, ...tags];

  return (
    <div className="flex !w-full flex-row gap-1 overflow-scroll px-4 scrollbar-hide">
      {tagsWithAll.map((tag) => (
        <Tab
          key={tag.id}
          id={tag.id}
          isSelected={tag.id === selectedTabId}
          setSelectedTab={setSelectedTabId}
        >
          {tag.tagContent}
        </Tab>
      ))}
    </div>
  );
}
