'use client';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Test');
  };

  return (
    <>
      <form className='mx-auto py-10 h-min'>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='bord bg-[#f1f7ed] text-black rounded-l-xl h-10'
          placeholder='Search here...'
        />
        <input
          type='submit'
          onSubmit={handleSubmit}
          value={'Search'}
          className='bord rounded-r-xl h-10'
        />
      </form>
    </>
  );
}
