import Tab from '../common/Tab';
import { INITIAL_TABS } from '@/constants/place';
import { useEffect, useState } from 'react';

import type { TabType } from '@/types/place';
import type { Dispatch, SetStateAction } from 'react';

interface TabsProps {
  selectedTabIds: number[];
  setSelectedTabIds: Dispatch<SetStateAction<number[]>>;
}

export default function Tabs({ selectedTabIds, setSelectedTabIds }: TabsProps) {
  const [Tabs, setTabs] = useState<TabType[]>(INITIAL_TABS);

  const handleSelectTab = (id: number) => {
    setSelectedTabIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedTabId) => selectedTabId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  useEffect(() => {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isSelected: selectedTabIds.includes(tab.id),
      }))
    );
  }, [selectedTabIds]);

  return (
    <div className="mb-4 grid grid-cols-3 gap-2 p-3">
      {Tabs.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          isSelected={tab.isSelected}
          setSelectedTab={handleSelectTab as Dispatch<SetStateAction<number>>} // TODO: Tab 컴포넌트의 setSelectedTab prop 대신 handleSelectTab 함수를 넘겨주도록 수정
        >
          {tab.children}
        </Tab>
      ))}
    </div>
  );
}
