export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className=' my-2 w-4/5 '>
      <p className='text-lg sm:text-2xl my-auto'>{children}</p>
    </div>
  );
}
