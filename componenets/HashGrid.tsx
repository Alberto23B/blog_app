'use client';
import { HashGridProps } from '@/types/Types';
import Hashtag from './Hashtag';
import { useState } from 'react';

export default function HashGrid({
  hashtags,
  handleClick,
  visibility = false,
}: HashGridProps) {
  const [visible, setVisible] = useState(visibility);

  return (
    <div className='flex justify-start overflow-scroll mb-2 flex-wrap min-w-60 mx-4 no-scrollbar gap-2'>
      {!visible && (
        <button
          className='rounded-xl bg-[#393737] w-fit px-4 inline-block'
          onClick={() => setVisible(!visible)}
        >
          #
        </button>
      )}
      {visible &&
        hashtags.map((hashtag, i) => {
          return (
            <Hashtag key={i} hashtag={hashtag} handleClick={handleClick} />
          );
        })}
    </div>
  );
}
