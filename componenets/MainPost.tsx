import { generateHashtags, capitalizeTitle } from '@/lib/helpers';
import Image from 'next/legacy/image';
import { Post } from '@/types/Types';
import { useRouter } from 'next/router';
import Header from '@/componenets/Header';
import Body from '@/componenets/Body';
import HashGrid from '@/componenets/HashGrid';

export default function MainPost({ post }: { post: Post }) {
  const router = useRouter();
  const { hashtag } = router.query;

  const title = capitalizeTitle(post.title);
  const postHashtags = generateHashtags(post.title);

  const handleHashtagClick = (tag: string) => {
    if (hashtag === tag) {
      router.push('/#other');
    } else {
      router.push(`/?hashtag=${tag}#other`);
    }
  };

  return (
    <>
      <div className='w-full abstract min-h-[10vh] sm:min-h-[20vh] relative rounded-tl-xl'>
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
      <HashGrid
        hashtags={postHashtags}
        visibility={true}
        handleClick={handleHashtagClick}
      />
    </>
  );
}
