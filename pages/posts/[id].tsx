import { useRouter } from 'next/router';
import { Post } from '@/types/Types';
import { capitalizeTitle, generateHashtags } from '@/lib/helpers';
import { GetStaticPropsContext } from 'next';
import Layout from '@/componenets/Layout';
import ErrorPage from 'next/error';
import Header from '@/componenets/Header';
import Body from '@/componenets/Body';
import Image from 'next/image';
import HashGrid from '@/componenets/HashGrid';

export default function PostPage({ post }: { post: Post }) {
  const router = useRouter();
  const postHashtags = generateHashtags(post.title);
  const { hashtag } = router.query;

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  const title = capitalizeTitle(post.title);

  const handleHashtagClick = (tag: string) => {
    if (hashtag === tag) {
      router.push({ pathname: '/', query: {} });
    } else {
      router.push({ pathname: '/', query: { hashtag: tag } });
    }
  };

  return (
    <>
      <Layout>
        <div className='m-auto w-2/3 pt-20 py-10 flex flex-wrap  bord rounded-br-xl'>
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
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
  );

  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await posts.json();

  return {
    paths: data?.map((post: Post) => `/posts/${post.id}`) || [],
    fallback: true,
  };
}
