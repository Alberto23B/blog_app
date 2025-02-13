import { HashProps } from '@/types/Types';
import React from 'react';

export default function Hashtag({ hashtag, handleClick }: HashProps) {
  return (
    <div className='rounded-xl bg-[#393737] w-fit px-4 inline-block'>
      <button className='cursor-pointer' onClick={() => handleClick(hashtag)}>
        {hashtag}
      </button>
    </div>
  );
}
