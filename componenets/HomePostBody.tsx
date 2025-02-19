export default function HomePostBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='px-4 py-8'>
      <p className='3xl:text-3xl 3xl:my-8 sm:text-xl hidden sm:block'>
        {children}
      </p>
    </div>
  );
}
