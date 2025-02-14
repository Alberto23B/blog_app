'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AboutButton() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname === '/about');

  useEffect(() => {
    setIsActive(pathname === '/about');
  }, [pathname]);

  const buttonStyle = {
    inactive: 'w-full hover:bg-white cursor-pointer',
    active: 'w-full active:bg-slate-200  cursor-pointer',
  };

  return (
    <Link className='w-full text-2xl' href='/about'>
      <button className={isActive ? buttonStyle.active : buttonStyle.inactive}>
        About
      </button>
    </Link>
  );
}
