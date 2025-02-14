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
      router.push({ pathname: '/', query: {} });
    } else {
      router.push({ pathname: '/', query: { hashtag: tag } });
    }
  };

  return (
    <>
      {posts.map((post) => {
        const title = capitalizeTitle(post.title);
        const body = limitText(post.body, 100);
        const hashtags = generateHashtags(post.title);

        return (
          <div
            key={post.id}
            className='bord my-4 rounded-br-xl opacity-0 slowly'
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className='text-xl px-4 bg-[#393737]'>{title}</h2>
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
    </>
  );
}
