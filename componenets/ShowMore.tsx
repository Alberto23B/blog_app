'use client';
import Image from 'next/image';

export default function ShowMore({ place }: { place: string }) {
  const property =
    place === 'home'
      ? {
          style:
            'w-full h-1/3 justify-center col-span-2 flex flex-col opacity-0 slowly',
          href: '#other',
        }
      : {
          style: 'w-full pt-4 col-span-2 flex flex-col opacity-0 slowly',
          href: '#related',
        };

  return (
    <div className={property.style}>
      <a href={property.href}>
        <Image
          src='/show_more_nb.png'
          alt='show more'
          width={150}
          height={20}
          className='mx-auto h-auto'
        />
      </a>
      <button className='font-bold text-2xl flashy'>
        <a href={property.href}>&#11167;</a>
      </button>
    </div>
  );
}
