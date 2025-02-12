import { useRouter } from 'next/router';
import { Post } from '@/types/Types';
import { capitalizeTitle } from '@/lib/helpers';
import Layout from '@/componenets/Layout';
import ErrorPage from 'next/error';

export default function PostPage({ post }: { post: Post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  const title = capitalizeTitle(post.title);

  return (
    <>
      <Layout>
        <div>
          <h1>{title}</h1>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const data = await res.json();

  const selectedPost = data.find((post: Post) => post.id === Number(params.id));

  return {
    props: {
      post: selectedPost,
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
