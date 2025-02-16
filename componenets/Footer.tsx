import Link from 'next/link';

export default function Footer() {
  return (
    <div className=' relative text-xs pt-2 mt-4 bottom-0 flex border-t justify-around'>
      <Link href={'/'} className='text-cyan-800'>
        Privacy
      </Link>
      <Link href={'/'} className='text-cyan-800'>
        Terms & Conditions
      </Link>
      <Link href={'/'} className='text-cyan-800'>
        Contact Us
      </Link>
    </div>
  );
}
