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
    inactive: 'w-full',
    active: 'w-full active:bg-slate-500 hover:bg-slate-200',
  };

  return (
    <Link className='w-1/2  border ' href='/'>
      <button className={isActive ? buttonStyle.active : buttonStyle.inactive}>
        Home {isActive ? '(current)' : ''}
      </button>
    </Link>
  );
}
