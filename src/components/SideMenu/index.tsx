'use client';
import { Spacing } from '@/components';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { User } from '@/types/user';
import { Suspense } from '@suspensive/react';
import { useQueryClient } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import { formatDuration } from 'date-fns';
import { ko } from 'date-fns/locale';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

interface IconButtonProps {
  label: string;
  icon: React.ReactNode;
  link: string;
}

const IconButton = ({ label, icon, link }: IconButtonProps) => {
  return (
    <Link
      href={link}
      className="flex w-20 cursor-pointer flex-col items-center justify-center gap-2"
    >
      {icon}
      <div>{label}</div>
    </Link>
  );
};

const pages: { label: string; link: string; icon: string }[] = [
  { label: '카공기록', link: '/mypage/record', icon: 'History' },
  { label: '찜한 카페', link: '/mypage/place/bookmarks', icon: 'Bookmark' },
  { label: '작성한 리뷰', link: '/mypage/place/reviews', icon: 'Review' },
];

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  userInfo: User | undefined;
  totalDutation: number;
}

export default function SideMenu({ open, onClose, userInfo, totalDutation }: SideMenuProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, onClose);

  const { nickname, email, profileImage, loginCount } = userInfo || {
    nickname: '로그인이 필요합니다.',
    email: '',
    profileImage: '/assets/icons/profileImage.svg',
    loginCount: 0,
  };

  if (!open) return null;

  const handleLogoutClick = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    queryClient.clear();

    router.push('/auth/login');
  };

  return (
    <motion.div
      className="fixed top-0 z-50 mx-auto h-full w-full min-w-[360px] max-w-[448px] bg-bk100 bg-opacity-60"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div ref={ref} className="relative h-full w-72 shrink bg-white px-6 py-5">
        <Spacing size={20} />
        <div className="flex flex-col items-center justify-center gap-5">
          <div
            className="flex w-full cursor-pointer items-center justify-start gap-3"
            onClick={() => router.push(userInfo ? `/mypage` : '/auth/login')}
          >
            <Image
              src={profileImage}
              alt="profileImage"
              width={52}
              height={52}
              className="rounded-full"
              priority
            />
            <div className="flex flex-col items-start justify-center gap-0.5">
              <div className="text-sub1">{nickname}</div>
              <div className="text-caption text-bk40">{email}</div>
            </div>
          </div>
          {userInfo && (
            <>
              <div className="flex w-full items-center justify-start gap-4 bg-bk100 p-4">
                <div className="flex w-[88px] flex-col items-start justify-center gap-0.5 text-background">
                  <div className="text-caption opacity-60">카공실록 방문일</div>
                  <div className="text-sub2 ">{loginCount}일</div>
                </div>
                <div className="h-10 w-px bg-background opacity-30" />
                <div className="flex w-[88px] flex-col items-start justify-center  gap-0.5 text-background">
                  <div className="text-caption opacity-60">카공기록</div>
                  <Suspense.CSROnly fallback={null}>
                    <div className="text-sub2">
                      {formatDuration(
                        {
                          hours: Math.floor(totalDutation / 60),
                          minutes: totalDutation % 60,
                        },
                        {
                          locale: ko,
                          zero: true,
                        }
                      )}
                    </div>
                  </Suspense.CSROnly>
                </div>
              </div>
              <div className="flex w-full items-center justify-between text-caption">
                {pages.map((item) => {
                  return (
                    <IconButton
                      key={item.link}
                      label={item.label}
                      icon={
                        <Image
                          src={`/assets/icons/28/${item.icon}.svg`}
                          alt="Bookmark"
                          width={28}
                          height={28}
                        />
                      }
                      link={item.link}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
        <div className="my-6 h-px w-full bg-bk10" />
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex w-full cursor-pointer items-center justify-between">
            <div className="flex items-start justify-start gap-[5px]">
              <div className="text-sub2">공지사항</div>
              <div className="bg-violet/default h-[6px] w-[6px] rounded-full" />
            </div>
            <Image
              src="/assets/icons/16/Arrow-right.svg"
              alt="Arrow-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex w-full cursor-pointer items-center justify-between">
            <div className="text-sub2">자주 묻는 질문</div>
            <Image
              src="/assets/icons/16/Arrow-right.svg"
              alt="Arrow-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-sub2">버전정보</div>
            <div className="text-caption text-bk40">1.0.0</div>
          </div>
        </div>
        <Image
          src="/assets/icons/28/Close.svg"
          alt="Close"
          width={28}
          height={28}
          className="absolute -right-[44px] top-[14px] z-10 cursor-pointer invert filter"
          onClick={onClose}
        />
      </div>
      {userInfo && (
        <div className="absolute bottom-5 left-6 z-50 flex w-full items-center justify-start gap-3 text-body2 text-bk40">
          <div className="cursor-pointer" onClick={handleLogoutClick}>
            로그아웃
          </div>
          <div className="h-3 w-px bg-bk20" />
          <div className="cursor-pointer">탈퇴하기</div>
        </div>
      )}
    </motion.div>
  );
}
