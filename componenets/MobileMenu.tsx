'use client';
import { useState } from 'react';
import Logo from './Logo';
import UserButtons from './UserButtons';
import HashGrid from './HashGrid';
import Footer from './Footer';

export default function MobileMenu({
  popularHashtags,
}: {
  popularHashtags: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const styling = isOpen
    ? 'fixed top-0 left-0 w-72 h-screen z-50 transform transition-transform duration-300 sm:hidden translate-x-0 sidebar bord'
    : 'fixed top-0 left-0 w-72 h-screen z-50 transform transition-transform duration-300 sm:hidden -translate-x-full sidebar bord';

  return (
    <>
      <button
        className='mx-2 text-4xl sm:hidden block'
        onClick={() => setIsOpen(!isOpen)}
      >
        &#8801;
      </button>
      <div id='menu' className={styling}>
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-4 right-4 text-xl'
        >
          &times;
        </button>
        <div className='flex flex-col justify-around h-full'>
          <div className='h-auto'>
            <Logo />
            <UserButtons />
          </div>
          <div>
            <h2 className='m-4'>Buzzing right now:</h2>
            <HashGrid hashtags={popularHashtags} visibility={true} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
