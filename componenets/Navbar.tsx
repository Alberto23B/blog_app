import AboutButton from './AboutButton';
import HomeButton from './HomeButton';

export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-start h-10'>
      <div className='sm:block hidden w-1/4'>
        <h1 className=''>Blog App</h1>
      </div>
      <div className='flex w-1/2 min-w-96 '>
        <HomeButton />
        <AboutButton />
      </div>
    </nav>
  );
}
