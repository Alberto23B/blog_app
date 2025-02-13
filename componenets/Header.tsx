export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='col-span-3 h-max py-1'>
      <h1 className='text-8xl font-bold  animate-lineHeightExpand'>
        {children}
      </h1>
    </header>
  );
}
