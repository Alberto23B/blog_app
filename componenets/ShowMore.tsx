import Image from 'next/image';

export default function ShowMore() {
  return (
    <div className='w-full h-20 col-span-2 pt-28 flex flex-col '>
      <Image
        src='/show_more_nb.png'
        alt='show more'
        width={150}
        height={20}
        className='m-auto'
      />
      <button className='font-bold text-2xl flashy'>
        <a href='#other'>&#11167;</a>
      </button>
    </div>
  );
}
