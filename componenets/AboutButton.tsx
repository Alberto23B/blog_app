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
    inactive: 'w-full',
    active: 'w-full active:bg-slate-500 hover:bg-slate-200',
  };

  return (
    <Link className='w-1/2  border ' href='/about'>
      <button className={isActive ? buttonStyle.active : buttonStyle.inactive}>
        About {isActive ? '(current)' : ''}
      </button>
    </Link>
  );
}
