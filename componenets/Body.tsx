export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className='m-auto col-span-2'>
      <p className='text-2xl'>{children}</p>
    </div>
  );
}
