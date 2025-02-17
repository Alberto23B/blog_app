import { useRouter } from 'next/router';
import { Post } from '@/types/Types';
import { filterRelatedPosts, generateHashtags } from '@/lib/helpers';
import { GetStaticPropsContext } from 'next';
import Layout from '@/componenets/Layout';
import ErrorPage from 'next/error';
import MainPost from '@/componenets/MainPost';
import RelatedPosts from '@/componenets/RelatedPosts';
import ShowMore from '@/componenets/ShowMore';

export default function PostPage({
  post,
  relatedPosts,
}: {
  post: Post;
  relatedPosts: Post[];
}) {
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout>
        <div className='m-auto w-2/3 min-h-[75vh] flex flex-wrap bord rounded-br-xl'>
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
    paths: data?.map((post: Post) => `/posts/${post.id}`) || [],
    fallback: true,
  };
}
