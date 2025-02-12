import { GetStaticProps } from 'next';
import { Post } from '@/types/Types';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className='flex items-center justify-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='sm:block hidden border w-1/4 flex-shrink border-white'>
        <p>side 1</p>
      </div>
      <main className='flex flex.col w-1/2 min-w-96 border border-white'>
        {posts.map((post) => (
          <div key={post.id} className='border-b border-white'>
            <h2 className='text-2xl font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </main>
      <div className='flex-shrink w-1/4 sm:block hidden border border-white'>
        <p>side 2</p>
      </div>
    </div>
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
