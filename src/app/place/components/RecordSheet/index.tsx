'use client';
import { useImagesUpload } from '@/apis/image';
import { usePostStudyRecord } from '@/apis/record';
import { useGetUserInfo } from '@/apis/user';
import { Button, ImageUpload, BottomSheet, Modal } from '@/components';
import { getDate, getMonth, getYear } from 'date-fns';
import Link from 'next/link';
import { useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

interface RecordSheetProps {
  isOpen: boolean;
  placeId: number;
  onClose: () => void;
}

export default function RecordSheet({ isOpen, onClose, placeId }: RecordSheetProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState('');
  const ref = useRef<SheetRef>();

  const { data: userInfoData } = useGetUserInfo({});
  const memberId = userInfoData?.id as number;

  const { mutateAsync: uploadImagesMutateAsync } = useImagesUpload();
  const { mutate: postStudyRecordMutate } = usePostStudyRecord(memberId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10);
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    const date = new Date();
    const imageIds = !!images.length
      ? await uploadImagesMutateAsync({
          files: images,
          folderName: 'review',
        }).then((res) => res.images.map((image) => image.id))
      : [];

    postStudyRecordMutate(
      {
        memberId,
        placeId,
        studyDay: getDate(date),
        studyMonth: getMonth(date) + 1,
        studyYear: getYear(date),
        description,
        imageIds,
        duration: 80,
      },
      {
        onSuccess: () => {
          setIsModalOpen(true);
        },
      }
    );
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    onClose();
    setImages([]);
    setDescription('');
  };

  return (
    <>
      <BottomSheet
        ref={ref}
        isOpen={isOpen}
        onClose={onClose}
        snapPoints={[-70]}
        initialSnap={0}
        isBackDrop={true}
      >
        <div className="h-full px-6 pb-20 pt-8">
          <h3 className="mb-8 text-head3">
            스타벅스 동대문점에서의
            <br />
            카공을 기록해 보세요!
          </h3>
          <ImageUpload images={images} onUpload={(imageFiles) => setImages(imageFiles)} />

          <hr className="my-6 text-bk10" />

          <p className="mb-4 text-center text-body2 text-bk60">카공을 얼마나 했나요?</p>
          <div className="mx-auto flex h-28 w-28 items-center justify-between text-head2">
            <div className="flex flex-col items-center">
              <p>00</p>
              <p>01</p>
              <p>02</p>
            </div>
            <span className="text-body1">:</span>
            <div className="flex flex-col items-center">
              <p>00</p>
              <p>30</p>
              <p>00</p>
            </div>
          </div>

          <hr className="mb-6 mt-8 text-bk10" />

          <p className="mb-4 text-center text-body2 text-bk60">어떤걸 했나요?</p>
          <input
            type="text"
            placeholder="오늘 한 공부를 입력해 주세요. (최대10자)"
            alt="공부내용"
            maxLength={10}
            onChange={handleChange}
            className="mb-10 w-full bg-background p-4 text-body2 outline-none"
          />
          <Link
            href="/"
            className="block text-center text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2"
          >
            리뷰도 쓰러가기
          </Link>
        </div>
      </BottomSheet>
      {isOpen && (
        <Button
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full min-w-[360px] max-w-[448px]"
          onClick={handleSubmit}
        >
          카공 기록등록
        </Button>
      )}
      <Modal isOpen={isModalOpen}>
        <Modal.Content>카공 기록을 등록했어요!</Modal.Content>
        <Modal.Footer>
          <Button onClick={handleModalClose}>확인</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
