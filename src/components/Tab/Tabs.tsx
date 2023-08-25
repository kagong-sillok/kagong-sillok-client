'use client';
import Tab from './Tab';
import { INITIAL_TABS } from '@/app/place/constants';
import { useCallback, useEffect, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

export interface TabItem {
  id: number;
  isSelected: boolean;
  text: string;
}

interface TabsProps {
  selectedTabIds: number[];
  setSelectedTabIds: Dispatch<SetStateAction<number[]>>;
}

export default function Tabs({ selectedTabIds, setSelectedTabIds }: TabsProps) {
  const [Tabs, setTabs] = useState<TabItem[]>(INITIAL_TABS);

  const handleSelectTab = useCallback(
    (id: number) => {
      setSelectedTabIds((prev) => {
        if (prev.includes(id)) {
          return prev.filter((selectedTabId) => selectedTabId !== id);
        } else {
          return [...prev, id];
        }
      });
    },
    [setSelectedTabIds]
  );

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
        <Tab key={tab.id} id={tab.id} isSelected={tab.isSelected} setSelectedTab={handleSelectTab}>
          {tab.text}
        </Tab>
      ))}
    </div>
  );
}
