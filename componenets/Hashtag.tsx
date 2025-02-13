export default function Hashtag({ hashtag }: { hashtag: string }) {
  return (
    <div className='rounded-xl bg-[#393737] w-fit px-4 inline-block'>
      <button className='cursor-pointer'>{hashtag}</button>
    </div>
  );
}
