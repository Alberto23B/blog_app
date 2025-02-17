'use client';
import { useEffect, useState, useRef } from 'react';
import { Post } from '@/types/Types';
import Link from 'next/link';

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const styling = isVisible
    ? `w-2/3 mt-20 m-auto transition-opacity duration-1000 opacity-100`
    : `w-2/3 mt-20 m-auto transition-opacity duration-1000 opacity-0`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id='related' className={styling}>
      {posts.length !== 0 && (
        <>
          <h2 className='text-2xl'>Related to this topic:</h2>
          <div className='flex justify-start py-2 h-auto whitespace-nowrap overflow-scroll mb-2 flex-nowrap mx-4 no-scrollbar gap-2'>
            {posts.map((post, i) => {
              return (
                <div key={i}>
                  <Link href={`/posts/${post.id}`}>
                    <h2 className='text-xl py-2 px-4 h-32 w-60 text-wrap line-clamp-4 bg-[#393737]'>
                      {post.title}
                    </h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
