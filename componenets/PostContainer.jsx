import PostList from './PostList';

export default function PostContainer({ posts }) {
  return (
    <div className='grid grid-cols-1 gap-3 w-1/2 min-w-96 '>
      <PostList posts={posts} />
    </div>
  );
}
