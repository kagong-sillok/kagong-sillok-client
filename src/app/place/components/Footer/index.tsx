'use client';
import TimeLogSheet from '../TimeLogSheet';
import { useGetUserInfo } from '@/apis/user';
import { Button, LoginModal } from '@/components';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function Footer() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLogTimeSheetOpen, setIsLogTimeSheetOpen] = useState(false);
  const params = useParams() as { id: string };
  const placeId = Number(params.id);

  const { data: userInfoData } = useGetUserInfo({});

  const handleLogTimeClick = () => {
    if (!userInfoData?.id) {
      setIsLoginModalOpen(true);
      return;
    }

    setIsLogTimeSheetOpen(true);
  };
  return (
    <>
      <footer>
        <Button
          className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full min-w-[360px] max-w-[448px]"
          onClick={handleLogTimeClick}
        >
          카공 기록하기
        </Button>
      </footer>
      <TimeLogSheet
        isOpen={isLogTimeSheetOpen}
        onClose={() => setIsLogTimeSheetOpen(false)}
        placeId={placeId}
      />
      <LoginModal isOpen={isLoginModalOpen} onClose={setIsLoginModalOpen} />
    </>
  );
}
