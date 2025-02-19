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
    ? 'w-full text-cyan-700 text-center cursor-pointer text-2xl block underline decoration-4 underline-offset-10'
    : 'w-full cursor-pointer text-center text-2xl block active:text-white';

  return (
    <Link href='/about' className={buttonStyle}>
      About
    </Link>
  );
}
