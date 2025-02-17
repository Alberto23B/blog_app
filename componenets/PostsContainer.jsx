import HomePost from './HomePost';
import PostList from './PostList';
import ShowMore from './ShowMore';

export default function PostContainer({ mainPost, posts }) {
  return (
    <div className='grid grid-cols-1 gap-4 px-5 md:px-0 md:w-3/5 pt-10 min-w-96 min-h-screen'>
      <div className='sm:h-auto min-h-screen'>
        <HomePost post={mainPost} />
        <ShowMore />
      </div>
      <div
        id='other'
        className='sm:block grid sm:grid-cols-2 gap-4 overflow-scroll no-scrollbar h-[90vh]'
      >
        <PostList posts={posts} />
      </div>
    </div>
  );
}
