import HomePost from './HomePost';
import PostList from './PostList';
import ShowMore from './ShowMore';

export default function PostContainer({ mainPost, posts }) {
  return (
    <div className='grid grid-cols-1 gap-4 px-5 md:px-0 md:w-3/5 pt-10 min-w-96 min-h-screen'>
      <div className='sm:h-auto min-h-screen '>
        <HomePost post={mainPost} />
        <ShowMore place={'home'} />
      </div>
      <div id='other'></div>
      <div className='sm:block grid gap-4 overflow-scroll mt-6 sm:mt-4 no-scrollbar min-h-auto'>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
