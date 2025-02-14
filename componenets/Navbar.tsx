import AboutButton from './AboutButton';
import HomeButton from './HomeButton';

export default function Navbar() {
  return (
    <nav className='flex fixed w-full items-center justify-center h-10 bord'>
      <div className='flex w-xl min-w-96 justify-center'>
        <HomeButton />
        <AboutButton />
      </div>
    </nav>
  );
}
