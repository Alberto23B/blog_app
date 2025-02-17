import { generateHashtags, capitalizeTitle } from '@/lib/helpers';
import { Post } from '@/types/Types';
import { useRouter } from 'next/router';
import Header from '@/componenets/Header';
import Body from '@/componenets/Body';
import Image from 'next/image';
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
      <Header>{title}</Header>
      <Body>{post.body}</Body>
      <Image
        src='/vercel.svg'
        width={180}
        height={180}
        alt='placeholder'
        className='mx-auto my-4'
      />
      <HashGrid
        hashtags={postHashtags}
        visibility={true}
        handleClick={handleHashtagClick}
      />
    </>
  );
}
