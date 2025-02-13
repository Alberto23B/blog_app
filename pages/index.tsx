import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PostContainer from '@/componenets/PostsContainer';
import { Post } from '@/types/Types';
import Layout from '@/componenets/Layout';
import Container from '@/componenets/Container';
import SearchBar from '@/componenets/SearchBar';
import HashGrid from '@/componenets/HashGrid';

export default function Home({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const { hashtag } = router.query;

  const regex = new RegExp(`${hashtag}`);

  const filteredPosts = hashtag
    ? posts.filter((post) => {
        return regex.test(post.title);
      })
    : posts;

  const handleHashtagClick = (tag: string) => {
    console.log('test');
    if (hashtag === tag) {
      router.push({ pathname: '/', query: {} });
    } else {
      router.push({ pathname: '/', query: { hashtag: tag } });
    }
  };

  return (
    <>
      <Layout>
        <Container>
          <div className='flex-shrink w-1/3 sm:block hidden '>
            <p>BlogApp</p>
          </div>
          <PostContainer posts={filteredPosts} />
          <div className='sm:flex flex-col hidden w-1/3 flex-shrink '>
            <SearchBar />
            <h2 className='m-4'>Buzzing right now:</h2>
            <HashGrid
              hashtags={['lorem']}
              visibility={true}
              handleClick={handleHashtagClick}
            />
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
