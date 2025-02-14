import PostList from './PostList';

export default function PostContainer({ posts }) {
  return (
    <div className='grid grid-cols-1 gap-3 w-1/2 pt-6 min-w-96 h-[calc(100vh-2.5rem)] overflow-scroll no-scrollbar'>
      <PostList posts={posts} />
    </div>
  );
}
