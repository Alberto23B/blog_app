import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
    </>
  );
}
