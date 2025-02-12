import { Post } from '@/types/Types';
import Link from 'next/link';
import { capitalizeTitle, limitText } from '@/lib/helpers';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post) => {
        const title = capitalizeTitle(post.title);
        const body = limitText(post.body, 100);

        return (
          <div key={post.id} className='bord rounded-br-xl'>
            <Link href={`/posts/${post.id}`}>
              <h2 className='text-2xl font-bold border-b border-white my-2'>
                {title}
              </h2>
            </Link>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}
