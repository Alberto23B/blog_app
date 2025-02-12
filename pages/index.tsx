import { GetStaticProps } from 'next';
import PostList from '@/componenets/PostList';
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
          <div className='grid grid-cols-1 gap-3 w-1/2 min-w-96 '>
            <PostList posts={posts} />
          </div>
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
