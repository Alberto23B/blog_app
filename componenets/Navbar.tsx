'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname === '/');

  useEffect(() => {
    setIsActive(pathname === '/');
  }, [pathname]);

  const buttonStyle = {
    inactive: 'w-full hover:bg-slate-200',
    active: 'w-full active:bg-slate-500 hover:bg-slate-200',
  };

  return (
    <nav className='flex w-full items-center justify-start'>
      <div className='sm:block hidden w-1/4'>
        <h1 className=''>Blog App</h1>
      </div>
      <div className='flex w-1/2 min-w-96 '>
        <Link className='w-1/2 border-white border ' href='/'>
          <button
            className={isActive ? buttonStyle.active : buttonStyle.inactive}
          >
            Home
          </button>
        </Link>
        <Link className='w-1/2 border-white border ' href='/about'>
          <button
            className={isActive ? buttonStyle.active : buttonStyle.inactive}
          >
            About
          </button>
        </Link>
      </div>
    </nav>
  );
}
