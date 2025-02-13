export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto my-2 w-3/5 '>
      <p className='text-2xl my-auto'>{children}</p>
    </div>
  );
}
