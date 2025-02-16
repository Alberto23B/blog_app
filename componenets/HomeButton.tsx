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

  const buttonStyle = isActive
    ? 'w-full text-[#f1f7ed] text-center cursor-pointer text-2xl block underline underline-offset-12'
    : 'w-full cursor-pointer text-center text-2xl block active:text-white';

  return (
    <Link href='/' className={buttonStyle}>
      Home
    </Link>
  );
}
