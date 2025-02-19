import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PostContainer from '@/components/PostsContainer';
import { Post } from '@/types/Types';
import { filterPosts, getPopularHashtags } from '@/lib/helpers';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import HashGrid from '@/components/HashGrid';
import Logo from '@/components/Logo';
import UserButtons from '@/components/UserButtons';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';

export default function Home({
  mainPost,
  otherPosts,
}: {
  mainPost: Post;
  otherPosts: Post[];
}) {
  const router = useRouter();
  const { hashtag } = router.query;

  const filteredPosts = filterPosts(hashtag, otherPosts);

  const popularHashtags: string[] = getPopularHashtags([
    mainPost,
    ...otherPosts,
  ]);

  return (
    <>
      <Layout>
        <MobileMenu popularHashtags={popularHashtags} />
        <Container>
          <div
            id='lateral'
            className='sticky top-0 flex-col justify-evenly w-1/3 h-screen md:flex hidden '
          >
            <Logo />
            <UserButtons />
            <div>
              <h2 className='mx-4 font-bold my-5 3xl:text-3xl'>
                Buzzing right now:
              </h2>
              <HashGrid hashtags={popularHashtags} visibility={true} />
            </div>
            <Footer />
          </div>
          <PostContainer mainPost={mainPost} posts={filteredPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res) {
    return {
      notFound: true,
    };
  }

  const posts: Post[] = await res.json();

  const mainPost = posts[0];
  const otherPosts = posts.slice(1);

  return {
    props: {
      mainPost,
      otherPosts,
    },
  };
};
