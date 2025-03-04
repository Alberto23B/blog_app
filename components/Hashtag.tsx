'use client';
import { HashProps } from '@/types/Types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hashtag({ hashtag }: HashProps) {
  const router = useRouter();

  const query = router.query.hashtag;

  const [isActive, setIsActive] = useState(hashtag === query);

  const hashtagStyle = isActive
    ? 'rounded-xl  w-fit px-4 max-h-8 mr-1 sm:mr-0 3xl:max-h-12 inline-block border-white border 3xl:text-3xl smoothing'
    : 'rounded-xl  w-fit 3xl:px-6 px-4 max-h-8 mr-1 sm:mr-0 3xl:max-h-12 inline-block border-ivory border 3xl:text-3xl smoothing';

  useEffect(() => {
    setIsActive(hashtag === query);
  }, [hashtag, query]);

  const selectLink =
    hashtag === query ? '/#other' : `/?hashtag=${hashtag}#other`;

  return (
    <>
      <Link href={selectLink} className={hashtagStyle}>
        {hashtag}
      </Link>
    </>
  );
}
