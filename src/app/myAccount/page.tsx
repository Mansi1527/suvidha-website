import React from 'react';
import Details from "@/app/components/details/page";
import Sidebar from "@/app/components/sidebar/page";

const page = () => {
  return (
    <div className='bg-[#f2f3f3]'>
      <h1 className='md:p-10 md:pl-20 text-lg hidden md:flex font-semibold bg-gradient-to-r from-[#f0f2f1] to-[#d4e3db]'>My Account</h1>
      <div className='md:flex flex-col md:flex-row md:gap-5 md:p-4'>
        {/* <Sidebar className='md:w-1/4' /> */}
        {/* <Details className='md:w-3/4' active="4" /> */}
        <Sidebar />
        <Details active="5"/>
      </div>
    </div>
  );
}

export default page;