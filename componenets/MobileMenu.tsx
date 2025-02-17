'use client';
import { useState } from 'react';
import Logo from './Logo';
import UserButtons from './UserButtons';
import HashGrid from './HashGrid';
import Footer from './Footer';

export default function MobileMenu({
  popularHashtags,
  handleHashtagClick,
}: {
  popularHashtags: string[];
  handleHashtagClick: (tag: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const styling = isOpen
    ? 'fixed top-0 left-0 w-64 h-screen bg-amber-600 z-50 transform transition-transform duration-300 sm:hidden translate-x-0 abstract-mono'
    : 'fixed top-0 left-0 w-64 h-screen bg-amber-600 z-50 transform transition-transform duration-300 sm:hidden -translate-x-full abstract-mono';

  return (
    <>
      <button className='sm:hidden block' onClick={() => setIsOpen(!isOpen)}>
        Toggle Menu
      </button>
      <div id='menu' className={styling}>
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-4 right-4 text-white text-xl'
        >
          &times;
        </button>
        <div className='flex flex-col justify-around h-full'>
          <div>
            <Logo />
            <UserButtons />
          </div>
          <h2 className='m-4'>Buzzing right now:</h2>
          <HashGrid
            hashtags={popularHashtags}
            visibility={true}
            handleClick={handleHashtagClick}
          />
          <Footer menu={true} />
        </div>
      </div>
    </>
  );
}
