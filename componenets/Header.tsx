export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='col-span-3'>
      <h1 className='sm:text-7xl text-4xl font-bold my-4 tracking-tight leading-14 sm:animate-lineHeightExpand'>
        {children}
      </h1>
    </header>
  );
}
