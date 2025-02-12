'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-start'>
      <div className='sm:block hidden w-1/4'>
        <h1 className=''>Blog App</h1>
      </div>
      <div className='flex w-1/2 min-w-96 '>
        <Link className='w-1/2 border-white border' href='/'>
          Home
        </Link>
        <Link className='w-1/2 border-white border' href='/about'>
          About
        </Link>
      </div>
    </nav>
  );
}
