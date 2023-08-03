'use client';
import TimeLogSheet from '../TimeLogSheet';
import { Button } from '@/components';
import { useState } from 'react';

export default function Footer() {
  const [isLogTimeSheetOpen, setIsLogTimeSheetOpen] = useState(false);

  return (
    <>
      <footer>
        <Button
          type="DEFAULT"
          className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full min-w-[360px] max-w-[448px]"
          onClick={() => setIsLogTimeSheetOpen(true)}
        >
          카공 기록하기
        </Button>
      </footer>
      <TimeLogSheet isOpen={isLogTimeSheetOpen} onClose={() => setIsLogTimeSheetOpen(false)} />
    </>
  );
}
