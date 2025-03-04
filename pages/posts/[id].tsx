import { useRouter } from 'next/router';
import { Post } from '@/types/Types';
import { filterRelatedPosts, generateHashtags } from '@/lib/helpers';
import { GetStaticPropsContext } from 'next';
import Layout from '@/components/Layout';
import ErrorPage from 'next/error';
import MainPost from '@/components/MainPost';
import RelatedPosts from '@/components/RelatedPosts';
import ShowMore from '@/components/ShowMore';

export default function PostPage({
  post,
  relatedPosts,
}: {
  post: Post;
  relatedPosts: Post[];
}) {
  const router = useRouter();

  if (!router.isFallback && !post.id) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout>
        <div className='m-auto w-full px-5 sm:w-2/3 min-h-[75vh] flex flex-wrap bord rounded-br-xl'>
          <MainPost post={post} />
        </div>
        <ShowMore place='post' />
        <RelatedPosts posts={relatedPosts} />
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

  const postData = await res.json();

  if (!postData) {
    return {
      notFound: true,
    };
  }

  const postHashtags = generateHashtags(postData.title);

  const allPostsRes = await fetch('https://jsonplaceholder.typicode.com/posts');

  const allPosts: Post[] = await allPostsRes.json();

  const relatedPosts = filterRelatedPosts(allPosts, postData, postHashtags);

  return {
    props: {
      post: postData,
      relatedPosts: relatedPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await posts.json();

  return {
    paths: data.map((post: Post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: true,
  };
}
