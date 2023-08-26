import { useMemberTotalDuration } from '@/apis/record';
import { useGetUserInfo } from '@/apis/user';
import { formatDuration } from 'date-fns';
import { ko } from 'date-fns/locale';

import type { PageType } from '@/types/mypage';

interface HeaderProps {
  page: PageType;
}

const getHeader = (page: PageType, time: string) => {
  switch (page) {
    case 'PLACE':
      return '카공실록 기록 확인해보세요.';
    case 'RECORD':
      return (
        <>
          카공<span className="text-point/default"> {time}</span>째 기록중
        </>
      );
  }
};

function Header({ page }: HeaderProps) {
  const { data: userInfoData } = useGetUserInfo({});
  const { data: totalDutationData } = useMemberTotalDuration(userInfoData?.id || -1);
  const time = formatDuration(
    {
      hours: Math.floor((totalDutationData || 0) / 60),
      minutes: (totalDutationData || 0) % 60,
    },
    {
      locale: ko,
      zero: true,
    }
  );

  return (
    <div className="pb-8 pl-6 pt-5 text-head3">
      {userInfoData?.nickname}의<br />
      {getHeader(page, time)}
    </div>
  );
}

export default Header;
