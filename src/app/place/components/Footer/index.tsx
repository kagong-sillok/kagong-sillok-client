'use client';
import RecordSheet from '../RecordSheet';
import { useGetPlace } from '@/apis/place';
import { useGetUserInfo } from '@/apis/user';
import { Button, LoginModal } from '@/components';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useState } from 'react';

export default function Footer() {
  const [isRecordSheetOpen, setIsRecordSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id: placeId } = useNumberParams<['id']>();

  const { data: userInfoData } = useGetUserInfo({});
  const { data: placeData } = useGetPlace(placeId);

  const handleRecordClick = () => {
    if (!userInfoData?.id) return setIsModalOpen(true);
    setIsRecordSheetOpen(true);
  };

  return (
    <>
      <footer>
        <Button
          className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full min-w-[360px] max-w-[448px]"
          onClick={handleRecordClick}
        >
          카공 기록하기
        </Button>
      </footer>
      <RecordSheet
        isOpen={isRecordSheetOpen}
        onClose={() => setIsRecordSheetOpen(false)}
        placeId={placeId}
        placeName={placeData.name}
      />
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
