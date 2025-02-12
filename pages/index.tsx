import { GetStaticProps } from 'next';
import PostContainer from '@/componenets/PostsContainer';
import { Post } from '@/types/Types';
import Layout from '@/componenets/Layout';
import Container from '@/componenets/Container';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Layout>
        <Container>
          <div className='sm:block hidden border w-1/4 flex-shrink border-white'>
            <p>side 1</p>
          </div>
          <PostContainer posts={posts} />
          <div className='flex-shrink w-1/4 sm:block hidden border border-white'>
            <p>side 2</p>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
