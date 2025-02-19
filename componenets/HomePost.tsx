import { Post } from '@/types/Types';
import HashGrid from './HashGrid';
import { capitalizeTitle, limitText, generateHashtags } from '@/lib/helpers';
import Link from 'next/link';
import Image from 'next/legacy/image';
import HomePostBody from './HomePostBody';

export default function HomePost({ post }: { post: Post }) {
  const title = capitalizeTitle(post.title);
  const hashtags = generateHashtags(post.title);
  const body = limitText(post.body, 100);

  return (
    <>
      {post && (
        <>
          <div className='col-span-2 mx-auto h-fit bord rounded-br-xl 3xl:h-[60vh]'>
            <p className='absolute z-20 w-1/5 sm:w-1/8 block bg-cyan-700 pr-4 text-end rounded-tl-xl 3xl:text-2xl'>
              Latest
            </p>
            <div className='w-full h-[20vh] xl:h-[25vh] rounded-tl-xl relative'>
              <Image
                src='/post_bg.webp'
                alt='bg'
                layout='fill'
                className='rounded-tl-xl'
                priority
              />
            </div>
            <Link href={`/posts/${post.id}`}>
              <h2 className='3xl:text-7xl sm:text-4xl text-2xl px-4 py-2 title'>
                {title}
              </h2>
            </Link>
            <HomePostBody>
              {body}
              <Link
                href={`/posts/${post.id}`}
                className='rounded-xl text-cyan-700 w-fit px-4 mx-2 inline'
              >
                Show more
              </Link>
            </HomePostBody>
            <HashGrid hashtags={hashtags} visibility={true} />
          </div>
        </>
      )}
      {!post && <p>There is no content to display</p>}
    </>
  );
}
