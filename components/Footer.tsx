import Link from 'next/link';

export default function Footer() {
  return (
    <div className=' relative text-xs 3xl:text-xl pt-2 flex border-t justify-around'>
      <Link href={'/'} className={'text-cyan-700'}>
        Privacy
      </Link>
      <Link href={'/'} className={'text-cyan-700'}>
        Terms & Conditions
      </Link>
      <Link href={'/'} className={'text-cyan-700'}>
        Contact Us
      </Link>
    </div>
  );
}
