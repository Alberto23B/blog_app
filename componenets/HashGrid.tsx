'use client';
import { HashGridProps } from '@/types/Types';
import Hashtag from './Hashtag';
import { useState } from 'react';

export default function HashGrid({
  hashtags,
  visibility = false,
}: HashGridProps) {
  const [visible, setVisible] = useState(visibility);

  return (
    <div className='flex justify-start overflow-scroll items-center mb-2 flex-wrap min-w-60 mx-4 no-scrollbar sm:gap-2'>
      {!visible && (
        <button
          className='rounded-xl bg-sand border-ivory border w-fit px-4 max-h-8 3xl:max-h-12 inline-block 3xl:text-3xl smoothing'
          onClick={() => setVisible(!visible)}
        >
          #
        </button>
      )}
      {visible &&
        hashtags.map((hashtag, i) => {
          return <Hashtag key={i} hashtag={hashtag} />;
        })}
    </div>
  );
}
