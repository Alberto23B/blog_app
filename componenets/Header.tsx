export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='col-span-3'>
      <h1 className='text-8xl font-bold leading-20'>{children}</h1>
    </header>
  );
}
