'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HomeButton() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname === '/');

  useEffect(() => {
    setIsActive(pathname === '/');
  }, [pathname]);

  const buttonStyle = {
    inactive: 'w-full cursor-pointer',
    active: 'w-full active:bg-slate-600 cursor-pointer',
  };

  return (
    <Link className='w-full text-2xl ' href='/'>
      <button className={isActive ? buttonStyle.active : buttonStyle.inactive}>
        Home
      </button>
    </Link>
  );
}
