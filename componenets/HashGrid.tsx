'use client';
import Hashtag from './Hashtag';
import { useState } from 'react';

export default function HashGrid({ hashtags }: { hashtags: string[] }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex justify-start overflow-scroll px-4 no-scrollbar w-4/5 gap-2'>
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
          return <Hashtag key={i} hashtag={hashtag} />;
        })}
    </div>
  );
}
