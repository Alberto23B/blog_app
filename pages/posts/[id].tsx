import { useRouter } from 'next/router';
import { Post } from '@/types/Types';
import { capitalizeTitle } from '@/lib/helpers';
import { GetStaticPropsContext } from 'next';
import Layout from '@/componenets/Layout';
import ErrorPage from 'next/error';
import Header from '@/componenets/Header';
import Body from '@/componenets/Body';
import Image from 'next/image';

export default function PostPage({ post }: { post: Post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  const title = capitalizeTitle(post.title);

  return (
    <>
      <Layout>
        <div className='m-auto w-2/3 py-20 grid bord rounded-br-xl'>
          <Header>{title}</Header>
          <Body>{post.body}</Body>
          <Image src='/vercel.svg' width={200} height={200} alt='placeholder' />
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
