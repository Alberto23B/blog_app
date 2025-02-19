export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='flex flex-wrap justify-around'>{children}</div>;
}
