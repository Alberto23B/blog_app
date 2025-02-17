import { Post } from '@/types/Types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { capitalizeTitle, limitText, generateHashtags } from '@/lib/helpers';
import HashGrid from '@/componenets/HashGrid';

export default function PostList({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const { hashtag } = router.query;

  const handleHashtagClick = (tag: string) => {
    if (hashtag === tag) {
      router.push('/#other');
    } else {
      router.push(`/?hashtag=${tag}#other`);
    }
  };

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
              className='flex flex-col justify-around bord my-2 rounded-br-xl'
            >
              <Link href={`/posts/${post.id}`}>
                <h2 className='text-xl px-4 title'>{title}</h2>
              </Link>
              <div className='p-4'>
                <p className='text-sm'>
                  {body}
                  <Link
                    href={`/posts/${post.id}`}
                    className='rounded-xl text-cyan-800 w-fit px-4 mx-2 inline'
                  >
                    Show more
                  </Link>
                </p>
              </div>
              <HashGrid
                hashtags={hashtags}
                visibility={false}
                handleClick={handleHashtagClick}
              />
            </div>
          );
        })}
      {posts.length === 0 && <p>No results matching the filter</p>}
    </>
  );
}
