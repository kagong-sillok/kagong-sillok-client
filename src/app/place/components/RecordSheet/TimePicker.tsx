'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import cn from '@/utils/cn';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface TimePickerProps {
  slideList: string[];
  currentSlide: string;
  onSlideChange: (slide: string) => void;
}

export default function TimePicker({ slideList, currentSlide, onSlideChange }: TimePickerProps) {
  return (
    <Swiper
      className="relative h-full w-full"
      direction={'vertical'}
      slidesPerView={3}
      pagination={{
        clickable: true,
      }}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      modules={[Navigation, FreeMode]}
      onSlideChange={(swiper) => {
        onSlideChange(slideList[swiper.activeIndex]);
      }}
      initialSlide={slideList.indexOf(currentSlide)}
      mousewheel
      slideToClickedSlide
      centeredSlides
    >
      {slideList.map((slide) => (
        <SwiperSlide key={slide}>
          {({ isNext, isActive, isPrev }) => (
            <div
              className={cn('flex flex-col items-center', {
                // 'gradient-text-t-to-b': isPrev,
                'text-bk100': isActive,
                'text-bk40': !isActive,
                // 'gradient-text-b-to-t': isNext,
              })}
            >
              {slide.padStart(2, '0')}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
