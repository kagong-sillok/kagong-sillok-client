import { type Dispatch, type SetStateAction, memo } from 'react';

interface TabProps {
  children: React.ReactNode;
  id: number;
  isSelected: boolean;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

export default memo(function Tab({ children, id, isSelected, setSelectedTab }: TabProps) {
  function handleClick() {
    setSelectedTab(id);
  }

  return (
    <button
      type="button"
      className={`${
        isSelected
          ? 'bg-bk100 text-white active:bg-bk80'
          : 'border border-bk10 bg-white text-black active:bg-bk10'
      } hover:bg- box-border h-8 min-w-fit rounded-full px-[0.9375rem] text-body2 transition-colors`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});
