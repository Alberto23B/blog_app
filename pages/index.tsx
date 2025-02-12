export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='sm:block hidden border w-1/4 flex-shrink border-white'>
        <p>side 1</p>
      </div>
      <main className='flex flex-1 w-1/2 min-w-96 border border-white'></main>
      <div className='flex-shrink w-1/4 sm:block hidden border border-white'>
        <p>side 2</p>
      </div>
    </div>
  );
}
