import { PageType, UserData } from '@/types/mypage';
import { format } from 'date-fns';

const getHeader = (page: PageType, time: string) => {
  switch (page) {
    case 'place':
      return '카공실록 기록 확인해보세요.';
    case 'record':
      return (
        <>
          카공
          <span className="text-violet/default">{time}</span>째 기록중
        </>
      );
  }
};

function Header({ page, user }: { page: PageType; user: UserData }) {
  const time = format(new Date(user.time), "h'시간' m'분'");
  return (
    <div className="pb-8 pl-6 pt-5 text-head3">
      {user.name}의<br />
      {getHeader(page, time)}
    </div>
  );
}

export default Header;
