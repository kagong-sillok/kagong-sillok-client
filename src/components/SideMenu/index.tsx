'use client';
import { Spacing } from '@/components';
import { User } from '@/types/user';
import { useQueryClient } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
      as={link}
    >
      {icon}
      <div>{label}</div>
    </Link>
  );
};

const pages: { label: string; link: string }[] = [
  { label: '카공기록', link: '/mypage/record' },
  { label: '찜한 카페', link: '/mypage/place/bookmarks' },
  { label: '작성한 리뷰', link: '/mypage/place/reviews' },
];

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  userInfo: User | undefined;
}

export default function SideMenu({ open, onClose, userInfo }: SideMenuProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { nickname, email, profileImage, loginCount } = userInfo || {
    nickname: '로그인이 필요합니다.',
    email: '',
    profileImage: '/assets/icons/profileImage.svg',
    loginCount: 0,
  };

  if (!open) return <></>;

  const handleUserClick = () => {
    router.push(userInfo ? `/mypage` : '/auth/login');
  };

  const handleLogoutClick = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    queryClient.clear();

    router.push('/auth/login');
  };

  return (
    <motion.div
      className="absolute left-0 top-0 z-50 flex h-screen w-full items-start justify-start"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-full w-72 bg-white px-6 py-5">
        <Spacing size={20} />
        <div className="flex flex-col items-center justify-center gap-5">
          <div
            className="flex w-full cursor-pointer items-center justify-start gap-3"
            onClick={handleUserClick}
          >
            <Image
              src={profileImage}
              alt="profileImage"
              width={52}
              height={52}
              className="rounded-full"
            />
            <div className="flex flex-col items-start justify-center gap-0.5">
              <div className="text-sub1">{nickname}</div>
              <div className="text-caption text-bk40">{email}</div>
            </div>
          </div>
          <div className="flex w-full items-center justify-start gap-4 bg-bk100 p-4">
            <div className="flex w-[88px] flex-col items-start justify-center gap-0.5 text-background">
              <div className="text-caption opacity-60">카공실록 방문일</div>
              <div className="text-sub2 ">{loginCount}일</div>
            </div>
            <div className="h-10 w-px bg-background opacity-30" />
            <div className="flex w-[88px] flex-col items-start justify-center  gap-0.5 text-background">
              <div className="text-caption opacity-60">카공기록</div>
              <div className="text-sub2 ">8시간 20분</div>
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
                      src="/assets/icons/28/Bookmark.svg"
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
            <div className="text-caption text-bk40">1.3.6</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-6 z-50 flex w-full items-center justify-start gap-3 text-body2 text-bk40">
        <div className="cursor-pointer" onClick={handleLogoutClick}>
          로그아웃
        </div>
        <div className="h-3 w-px bg-bk20" />
        <div className="cursor-pointer">탈퇴하기</div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/assets/icons/28/Close.svg"
          alt="Close"
          width={28}
          height={28}
          className="absolute left-5 top-[14px] z-10 cursor-pointer invert filter"
          onClick={onClose}
        />
        <div className={`h-full w-full cursor-pointer bg-bk100 opacity-60`} onClick={onClose} />
      </div>
    </motion.div>
  );
}
