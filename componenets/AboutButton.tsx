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

  const buttonStyle = isActive
    ? 'w-full text-[#f1f7ed] text-center cursor-pointer text-2xl block underline'
    : 'w-full cursor-pointer text-center text-2xl block active:underline';

  return (
    <Link href='/about' className={buttonStyle}>
      About
    </Link>
  );
}
