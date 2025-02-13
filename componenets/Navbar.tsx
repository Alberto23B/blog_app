import AboutButton from './AboutButton';
import HomeButton from './HomeButton';

export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-center h-12'>
      <div className='flex w-1/3 min-w-96 m-auto'>
        <HomeButton />
        <AboutButton />
      </div>
    </nav>
  );
}
