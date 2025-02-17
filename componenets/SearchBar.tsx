'use client';
import { useState } from 'react';

export default function SearchBar({
  handleClick,
}: {
  handleClick: (tag: string) => void;
}) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.SyntheticEvent, searchQuery: string) => {
    e.preventDefault();
    handleClick(searchQuery);
  };

  return (
    <>
      <form
        className='text-center h-min'
        onSubmit={(e) => handleSubmit(e, query)}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='bord bg-[#f1f7ed] text-black rounded-l-xl h-10 w-2/3'
          placeholder='Search here...'
        />
        <input
          type='submit'
          value={'Search'}
          className='bord rounded-r-xl h-10'
        />
      </form>
    </>
  );
}
