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
    ? 'rounded-xl bg-[#393737] w-fit px-4 max-h-8 inline-block border-white border'
    : 'rounded-xl bg-[#393737] w-fit px-4 max-h-8 inline-block border-[#4a4848] border';

  useEffect(() => {
    setIsActive(hashtag === query);
  }, [hashtag, query]);

  return (
    <>
      <Link href={`?hashtag=${hashtag}#other`} className={hashtagStyle}>
        {hashtag}
      </Link>
    </>
  );
}
