import { Post } from '@/types/Types';
import Link from 'next/link';
import { capitalizeTitle, limitText, generateHashtags } from '@/lib/helpers';
import HashGrid from '@/componenets/HashGrid';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post) => {
        const title = capitalizeTitle(post.title);
        const body = limitText(post.body, 100);
        const hashtags = generateHashtags(post.title);

        return (
          <div key={post.id} className='bord rounded-br-xl'>
            <Link href={`/posts/${post.id}`}>
              <h2 className='text-2xl px-4 font-bold border-b border-white my-2'>
                {title}
              </h2>
            </Link>
            <div className='p-4 text-lg'>
              <p>
                {body}
                <Link
                  href={`/posts/${post.id}`}
                  className='rounded-xl text-cyan-800 w-fit px-4 mx-2 inline'
                >
                  Show more
                </Link>
              </p>
            </div>
            <HashGrid hashtags={hashtags} />
          </div>
        );
      })}
    </>
  );
}
