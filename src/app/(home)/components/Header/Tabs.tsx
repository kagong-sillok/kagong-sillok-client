import { CONDITION_LIST } from '@/app/place/constants';
import { Tab } from '@/components';
import { useState } from 'react';

type Condition = (typeof CONDITION_LIST)[number];

type ConditionTabType = Condition | { id: 0; title: '전체' };

const CONDITION_TAB_LIST: ConditionTabType[] = [
  {
    id: 0,
    title: '전체',
  },
  ...CONDITION_LIST,
];

export default function Tabs() {
  const [selectedTabId, setSelectedTabId] = useState(0);

  return (
    <div className="mb-3 flex !w-full flex-row gap-1 overflow-scroll px-4 scrollbar-hide">
      {CONDITION_TAB_LIST.map((condition) => (
        <Tab
          key={condition.id}
          id={condition.id}
          isSelected={condition.id === selectedTabId}
          setSelectedTab={setSelectedTabId}
        >
          {condition.title}
        </Tab>
      ))}
    </div>
  );
}
