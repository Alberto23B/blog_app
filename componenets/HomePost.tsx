import { Post } from '@/types/Types';
import HashGrid from './HashGrid';
import { capitalizeTitle, limitText, generateHashtags } from '@/lib/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HomePost({ post }: { post: Post }) {
  const title = capitalizeTitle(post.title);
  const hashtags = generateHashtags(post.title);
  const body = limitText(post.body, 100);

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
        <>
          <div className='col-span-2 mx-auto h-fit bord rounded-br-xl'>
            <p className='float-end w-1/5 block bg-cyan-800 pr-4 text-end'>
              Latest
            </p>
            <div className='w-full abstract h-[25vh] rounded-tl-xl'></div>
            <Link href={`/posts/${post.id}`}>
              <h2 className='sm:text-4xl text-2xl px-4 py-2 title'>{title}</h2>
            </Link>
            <div className='px-4 py-8'>
              <p className='sm:text-xl hidden sm:block'>{post.body}</p>
              <p className='sm:text-2xl block sm:hidden'>{body}</p>
            </div>
            <HashGrid
              hashtags={hashtags}
              visibility={true}
              handleClick={handleHashtagClick}
            />
          </div>
        </>
      )}
      {!post && <p>There is no content to display</p>}
    </>
  );
}
