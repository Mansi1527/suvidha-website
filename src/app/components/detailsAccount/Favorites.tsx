import React from 'react';

const Favorites = () => {
  return (
    <div className='flex justify-center items-center w-full mt-10 px-4 md:px-0'> 
      <button className='border border-red-500 py-2 font-semibold text-sm flex justify-center items-center w-full h-full cursor-default text-red-500 rounded-md'>
        Your Favorites are Empty
      </button>
    </div>
  );
}

export default Favorites;