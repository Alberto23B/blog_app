'use client';
import { HashProps } from '@/types/Types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Hashtag({ hashtag, handleClick }: HashProps) {
  const router = useRouter();

  const query = router.query.hashtag;

  const [isActive, setIsActive] = useState(hashtag === query);

  useEffect(() => {
    setIsActive(hashtag === query);
  }, [hashtag, query]);

  return (
    <div
      className={
        isActive
          ? 'rounded-xl bg-[#393737] w-fit px-4 inline-block border-white border'
          : 'rounded-xl bg-[#393737] w-fit px-4 inline-block border-[#4a4848] border'
      }
    >
      <button className='cursor-pointer' onClick={() => handleClick(hashtag)}>
        {hashtag}
      </button>
    </div>
  );
}
