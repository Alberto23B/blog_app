import { Post } from '@/types/Types';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className='border border-black'>
          <div className='border-b'>
            <h2 className='text-2xl font-bold border-b border-white my-2'>
              {post.title}
            </h2>
          </div>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
