import { useMemo } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PostContainer from '@/componenets/PostsContainer';
import { Post, FreqMap } from '@/types/Types';
import { filterPosts, generateHashtags } from '@/lib/helpers';
import Layout from '@/componenets/Layout';
import Container from '@/componenets/Container';
import HashGrid from '@/componenets/HashGrid';
import Logo from '@/componenets/Logo';
import UserButtons from '@/componenets/UserButtons';
import Footer from '@/componenets/Footer';
import MobileMenu from '@/componenets/MobileMenu';

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

  const popularHashtags: string[] = useMemo(() => {
    const freqMap: FreqMap = {};

    otherPosts.forEach((post) => {
      const tags = generateHashtags(post.title);
      tags.forEach((tag) => (freqMap[tag] = (freqMap[tag] || 0) + 1));
    });

    return Object.entries(freqMap)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count)
      .map(({ tag }) => tag)
      .slice(0, 20);
  }, [otherPosts]);

  const handleHashtagClick = (tag: string) => {
    if (hashtag === tag) {
      router.push('/#other');
    } else {
      router.push(`/?hashtag=${tag}#other`);
    }
  };

  return (
    <>
      <Layout>
        <MobileMenu
          popularHashtags={popularHashtags}
          handleHashtagClick={handleHashtagClick}
        />
        <Container>
          <div
            id='lateral'
            className='sticky top-0 flex-col justify-evenly w-1/3 h-screen md:flex hidden '
          >
            <Logo />
            <UserButtons />
            <div>
              <h2 className='mx-4 my-5 3xl:text-3xl'>Buzzing right now:</h2>
              <HashGrid
                hashtags={popularHashtags}
                visibility={true}
                handleClick={handleHashtagClick}
              />
            </div>
            <Footer menu={false} />
          </div>
          <PostContainer mainPost={mainPost} posts={filteredPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
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
