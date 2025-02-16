import { Post } from '@/types/Types';
import HashGrid from './HashGrid';
import { capitalizeTitle, generateHashtags } from '@/lib/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HomePost({ post }: { post: Post }) {
  const title = capitalizeTitle(post.title);
  const hashtags = generateHashtags(post.title);

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
      {post && (
        <div className='col-span-2 border-l-0 border-t-0 border mx-auto h-96 border-cyan-800 rounded-br-xl'>
          <p className='w-full block bg-cyan-800 flashy'>Latest</p>
          <Link href={`/posts/${post.id}`}>
            <h2 className='text-4xl px-4 py-2 title'>{title}</h2>
          </Link>
          <div className='p-4 py-10'>
            <p className='text-2xl'>{post.body}</p>
          </div>
          <HashGrid
            hashtags={hashtags}
            visibility={true}
            handleClick={handleHashtagClick}
          />
        </div>
      )}
      {!post && <p>There is no content to display</p>}
    </>
  );
}
