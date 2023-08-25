import { User } from '@/types/user';
import { format } from 'date-fns';

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
  // const time = format(new Date(user.time), "h'시간' m'분'");
  const time = '8시간20분';
  // TODO: 유저 데이터에 시간 추가되면 수정 예정

  return (
    <div className="pb-8 pl-6 pt-5 text-head3">
      {user.nickname}의<br />
      {getHeader(page, time)}
    </div>
  );
}

export default Header;
