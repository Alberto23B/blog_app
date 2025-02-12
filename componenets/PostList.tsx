import { Post } from '@/types/Types';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className='border border-white'>
          <h2 className='text-2xl font-bold'>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
