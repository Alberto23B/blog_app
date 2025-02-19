export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className=' my-2 sm:w-4/5 mx-2 sm:mx-0 3xl:my-8'>
      <p className='3xl:text-3xl text-lg sm:text-2xl my-auto'>{children}</p>
    </div>
  );
}
