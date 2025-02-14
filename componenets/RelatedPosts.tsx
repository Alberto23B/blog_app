import { Post } from '@/types/Types';
import Link from 'next/link';

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  return (
    <div className='w-2/3 m-auto slowly opacity-0'>
      {posts.length !== 0 && (
        <>
          <h2>Related to this topic:</h2>
          <div className='flex justify-start py-2 whitespace-nowrap overflow-scroll mb-2 flex-nowrap mx-4 no-scrollbar gap-2'>
            {posts.map((post, i) => {
              return (
                <div key={i}>
                  <Link href={`/posts/${post.id}`}>
                    <h2 className='text-xl py-2 px-4 h-24 w-60 text-wrap line-clamp-3 bg-[#393737]'>
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
