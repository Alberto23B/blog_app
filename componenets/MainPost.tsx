import { generateHashtags, capitalizeTitle } from '@/lib/helpers';
import Image from 'next/legacy/image';
import { Post } from '@/types/Types';
import Header from '@/componenets/Header';
import Body from '@/componenets/Body';
import HashGrid from '@/componenets/HashGrid';

export default function MainPost({ post }: { post: Post }) {
  const title = capitalizeTitle(post.title);
  const postHashtags = generateHashtags(post.title);

  return (
    <>
      <div className='w-full abstract min-h-[10vh] sm:min-h-[20vh] relative rounded-tl-xl'>
        <p className='absolute z-20 w-1/5 block bg-cyan-700 pr-4 text-end rounded-tl-xl 3xl:text-2xl'>
          Posted by <span className='font-bold'>{post.userId}</span>
        </p>
        <Image
          src='/post_bg.png'
          alt='bg'
          layout='fill'
          loading='lazy'
          className='rounded-tl-xl'
        />
      </div>
      <Header>{title}</Header>
      <Body>{post.body}</Body>
      <HashGrid hashtags={postHashtags} visibility={true} />
    </>
  );
}
