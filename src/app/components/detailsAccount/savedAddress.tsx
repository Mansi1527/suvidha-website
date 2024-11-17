import React from 'react';

const SavedAddress = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-10">
      <h1 className="font-semibold text-lg">No Address Added!</h1>
      <p>Save home address to get home delivered.</p>
      <button className='border border-gray-200 rounded-xl mt-5 px-2 py-2 '>+ <span className='text-green-700 font-semibold'>Add New Address</span></button>
    </div>
  );
}

export default SavedAddress;
