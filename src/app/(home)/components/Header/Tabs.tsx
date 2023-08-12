import { useGetPlaceConditions } from '@/apis/place';
import { Tab } from '@/components';
import { useState } from 'react';

export default function Tabs() {
  const [selectedTabId, setSelectedTabId] = useState(0);

  const { data: placeConditionsData } = useGetPlaceConditions();

  return (
    <div className="flex !w-full flex-row gap-1 overflow-scroll px-4 scrollbar-hide">
      <Tab id={0} isSelected={selectedTabId === 0} setSelectedTab={setSelectedTabId}>
        전체
      </Tab>
      {placeConditionsData.tags.map((tag) => (
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
