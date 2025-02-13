import { GetStaticProps } from 'next';
import PostContainer from '@/componenets/PostsContainer';
import { Post } from '@/types/Types';
import Layout from '@/componenets/Layout';
import Container from '@/componenets/Container';
import SearchBar from '@/componenets/SearchBar';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Layout>
        <Container>
          <div className='flex-shrink w-1/3 sm:block hidden '>
            <p>BlogApp</p>
          </div>
          <PostContainer posts={posts} />
          <div className='sm:flex flex-col hidden w-1/3 flex-shrink '>
            <SearchBar />
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
