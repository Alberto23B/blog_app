import AboutButton from './AboutButton';
import HomeButton from './HomeButton';

export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-center h-10 bord'>
      <div className='flex w-xl gap-3 min-w-96 justify-center'>
        <HomeButton />
        <AboutButton />
      </div>
    </nav>
  );
}
