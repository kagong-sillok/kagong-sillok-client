'use client';
import { useGetPlaceWithTitle } from '@/apis/place';
import { SearchHistoryItem } from '@/app/search/components';
import { Loading } from '@/components';
import { Place } from '@/types/place';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: searchData, isFetching } = useGetPlaceWithTitle(searchValue);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setSearchValue(keyword);
    }
  }

  return (
    <>
      {searchValue !== '' && isFetching && <Loading />}

      <div className="h-screen bg-white">
        <div className="flex h-14 items-center px-6">
          <Link href="/">
            <Image src="/assets/icons/28/Back.svg" width={28} height={28} alt="back" />
          </Link>
          <input
            type="text"
            className="ml-3 w-full text-button1 outline-none placeholder:text-body1 placeholder:text-bk40"
            placeholder="어느 지역의 카페를 보여드릴까요?"
            value={keyword}
            onChange={handleChange}
            ref={inputRef}
            onKeyUp={handleKeyPress}
          />
          <Image
            src="/assets/icons/28/Search.svg"
            width={28}
            height={28}
            alt="search"
            className="cursor-pointer"
            onClick={() => {
              setSearchValue(keyword);
            }}
          />
        </div>
        {!Boolean(searchData?.places.length) ? (
          <div className="flex h-[calc(100%-3.5rem)] items-center justify-center">
            <p className="text-body1 text-bk40"> 원하는 지역의 카페를 검색해보세요!</p>
          </div>
        ) : (
          <>
            <ul>
              {searchData?.places.map((searchHistory) => (
                <SearchHistoryItem key={searchHistory.id} searchHistory={searchHistory} />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
