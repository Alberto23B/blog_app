'use client';
import Image from 'next/image';

export default function ShowMore({ place }: { place: string }) {
  const property =
    place === 'home'
      ? {
          style:
            'w-full h-20 col-span-2 pt-12 sm:pt-28 flex flex-col opacity-0 slowly',
          href: '#other',
        }
      : {
          style: 'w-full h-20 col-span-2 flex flex-col opacity-0 slowly',
          href: '#related',
        };

  return (
    <div className={property.style}>
      <Image
        src='/show_more_nb.png'
        alt='show more'
        width={150}
        height={20}
        className='m-auto'
      />
      <button className='font-bold text-2xl flashy'>
        <a href={property.href}>&#11167;</a>
      </button>
    </div>
  );
}
