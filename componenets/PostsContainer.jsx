import HomePost from './HomePost';
import PostList from './PostList';

export default function PostContainer({ mainPost, posts }) {
  return (
    <div className='grid grid-cols-1 gap-4 px-5 md:px-0 md:w-3/5 pt-6 min-w-96 h-[calc(100vh-2.5rem)]'>
      <HomePost post={mainPost} />
      <div className='grid grid-cols-2 gap-4 overflow-scroll no-scrollbar'>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
