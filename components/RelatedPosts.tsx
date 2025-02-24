'use client';
import { useEffect, useState, useRef } from 'react';
import { Post } from '@/types/Types';
import Link from 'next/link';

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const styling = isVisible
    ? `sm:w-2/3 sm:mx-auto mx-4 mt-20 m-auto transition-opacity duration-1000 opacity-100`
    : `sm:w-2/3 sm:mx-auto mx-4 mt-20 m-auto transition-opacity duration-1000 opacity-0`;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

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
          <h2 className='text-2xl ml-4'>Related to this topic:</h2>
          <div
            ref={containerRef}
            className='flex justify-start py-2 h-auto whitespace-nowrap overflow-scroll mb-2 flex-nowrap mx-4 no-scrollbar gap-2'
          >
            {posts.map((post, i) => {
              return (
                <div key={i}>
                  <Link href={`/posts/${post.id}`}>
                    <h2 className='text-xl py-2 px-4 h-32 bg-wine text-milk w-60 text-wrap line-clamp-4 dark:bg-jet'>
                      {post.title}
                    </h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
      {posts.length === 0 && <p>No related posts</p>}
    </div>
  );
}
