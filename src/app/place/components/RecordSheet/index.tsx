'use client';

import TimePicker from './TimePicker';
import { useImagesUpload } from '@/apis/image';
import { usePostStudyRecord } from '@/apis/record';
import { useGetUserInfo } from '@/apis/user';
import { Button, ImageUpload, BottomSheet, Modal, Spacing } from '@/components';
import { getDate, getMonth, getYear } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

interface RecordSheetProps {
  isOpen: boolean;
  placeId: number;
  placeName: string;
  onClose: () => void;
}

export default function RecordSheet({ isOpen, placeName, onClose, placeId }: RecordSheetProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState({
    hour: '0',
    minute: '0',
  });

  const ref = useRef<SheetRef>();

  const { data: userInfoData } = useGetUserInfo({});
  const memberId = userInfoData?.id as number;

  const { mutateAsync: uploadImagesMutateAsync, isLoading: isUploadImagesLoading } =
    useImagesUpload();
  const { mutate: postStudyRecordMutate, isLoading: isPostStudyRecordLoading } =
    usePostStudyRecord(memberId);

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
        duration: Number(duration.hour) * 60 + Number(duration.minute),
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
        disableDrag
      >
        <div className="h-full px-6 pb-20 pt-8">
          <h3 className="text-head3">
            {placeName}에서의
            <br />
            카공을 기록해 보세요!
          </h3>
          <Spacing size={32} />
          <ImageUpload images={images} onUpload={(imageFiles) => setImages(imageFiles)} />

          <hr className="my-6 text-bk10" />

          <p className="mb-4 text-center text-body2 text-bk60">카공을 얼마나 했나요?</p>
          <div className="relative mx-auto flex h-28 w-32 items-center justify-center text-head2">
            <TimePicker
              currentSlide={duration.hour}
              slideList={Array.from({ length: 24 }, (_, index) => '' + index)}
              onSlideChange={(activeIndex) =>
                setDuration((prev) => ({ ...prev, hour: activeIndex }))
              }
            />
            <Image src="/assets/icons/colon.svg" alt="colon" width={2} height={10} />
            <TimePicker
              currentSlide={duration.minute}
              slideList={Array.from({ length: 6 }, (_, index) => '' + index * 10)}
              onSlideChange={(activeIndex) =>
                setDuration((prev) => ({ ...prev, minute: activeIndex }))
              }
            />
          </div>

          <hr className="mb-6 mt-8 text-bk10" />

          <p className="mb-4 text-center text-body2 text-bk60">어떤걸 했나요?</p>
          <input
            type="text"
            placeholder="오늘 한 공부를 입력해 주세요. (최대10자)"
            alt="공부내용"
            maxLength={10}
            onChange={handleChange}
            className="w-full bg-background p-4 text-body2 outline-none"
          />
          <Spacing size={30} />
          {/* <Link
            href="/"
            className="block text-center text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2"
          >
            리뷰도 쓰러가기
          </Link> */}
        </div>
      </BottomSheet>
      {isOpen && (
        <Button
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full min-w-[360px] max-w-[448px]"
          onClick={handleSubmit}
          disabled={!description || isUploadImagesLoading || isPostStudyRecordLoading}
        >
          카공 기록등록
        </Button>
      )}
      <Modal isOpen={isModalOpen}>
        <Modal.Content>
          카공 기록을 등록했어요!
          <br />
          <Link href="/mypage/record" className="inline-block">
            <p className="cursor-pointer text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2">
              기록 보러가기
            </p>
          </Link>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={handleModalClose}>확인</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
