import Link from 'next/link';

export default function Footer({ menu }: { menu: boolean }) {
  return (
    <div className=' relative text-xs 3xl:text-xl pt-2 flex border-t justify-around'>
      <Link href={'/'} className={menu ? 'text-white' : 'text-cyan-700'}>
        Privacy
      </Link>
      <Link href={'/'} className={menu ? 'text-white' : 'text-cyan-700'}>
        Terms & Conditions
      </Link>
      <Link href={'/'} className={menu ? 'text-white' : 'text-cyan-700'}>
        Contact Us
      </Link>
    </div>
  );
}
