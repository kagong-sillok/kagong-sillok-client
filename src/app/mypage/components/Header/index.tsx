import { useMemberTotalDuration } from '@/apis/record';
import { User } from '@/types/user';
import { format, formatDuration } from 'date-fns';
import { ko } from 'date-fns/locale';

import type { PageType } from '@/types/mypage';

interface HeaderProps {
  page: PageType;
  user: User;
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

function Header({ page, user }: HeaderProps) {
  const { data: totalDutationData } = useMemberTotalDuration(user?.id || -1);
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
      {user.nickname}의<br />
      {getHeader(page, time)}
    </div>
  );
}

export default Header;
