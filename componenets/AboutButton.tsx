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
    inactive: 'w-full hover:bg-[#393737] cursor-pointer',
    active: 'w-full bg-[#393737] active:bg-slate-600  cursor-pointer',
  };

  return (
    <Link className='w-1/2 text-2xl' href='/about'>
      <button className={isActive ? buttonStyle.active : buttonStyle.inactive}>
        About
      </button>
    </Link>
  );
}
