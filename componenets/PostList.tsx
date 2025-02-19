import { Post } from '@/types/Types';
import Link from 'next/link';
import { capitalizeTitle, limitText, generateHashtags } from '@/lib/helpers';
import HashGrid from '@/componenets/HashGrid';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.length != 0 &&
        posts.map((post) => {
          const title = capitalizeTitle(post.title);
          const body = limitText(post.body, 100);
          const hashtags = generateHashtags(post.title);

          return (
            <div
              key={post.id}
              className='flex flex-col bord my-2 max-h-60 sm:max-h-auto rounded-br-xl 3xl:my-4'
            >
              <Link href={`/posts/${post.id}`}>
                <h2 className='3xl:text-3xl text-xl px-4 title'>{title}</h2>
              </Link>
              <div className='p-4'>
                <p className='3xl:text-2xl text-sm'>
                  {body}
                  <Link
                    href={`/posts/${post.id}`}
                    className='rounded-xl text-cyan-700 w-fit px-4 mx-2 inline'
                  >
                    Show more
                  </Link>
                </p>
              </div>
              <HashGrid hashtags={hashtags} visibility={false} />
            </div>
          );
        })}
      {posts.length === 0 && <p>No results matching the filter</p>}
    </>
  );
}
