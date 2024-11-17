import React from 'react';
import { User, CalendarDays, Mail } from 'lucide-react';
import Link from 'next/link';

// Define the type for the props
interface PersonalDetailsProps {
  name: string;
  email: string;
  dob: number;  // You can change this to a Date type if needed
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ name, email, dob }) => {
  const data = [
    {
      logo: <User  size={20} />,
      heading: 'Full Name',
      desc: name,
    },
    {
      logo: <Mail size={20} />,
      heading: 'Email Address',
      desc: email,
    },
    {
      logo: <CalendarDays size={20} />,
      heading: 'Date of Birth',
      desc: dob.toString(), // Convert to string if dob is a number
    },
  ];

  return (
    <div className="pt-5 px-5 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Stack on mobile, 2 columns on md+ */}
        {data.map((items, index) => (
          <div
            key={index}
            className="bg-[#f1f3f3] rounded-xl py-3 px-2 flex items-center space-x-3"  // Styling each box
          >
            <div className='text-gray-500'>{items.logo}</div>
            <div>
              <h1 className="text-gray-400 text-sm">
                {items.heading} <span className="text-red-500">*</span>
              </h1>
              <p className="font-semibold text-sm">{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className='text-xs text-gray-600 font-extralight pt-2'>Note: Date of Birth cannot be Updated!</p>
      
      {/* Flex container with buttons aligned to the right */}
      <div className='flex flex-col md:flex-row justify-end mt-6'> {/* Stack buttons on mobile */}
        <div className='border border-gray-300 flex justify-center items-center py-2 px-10 rounded-lg text-[#007A32] font-thin mb-2 md:mb-0'>
          <Link href="/cancel" className='flex gap-1 items-center font-semibold'>Cancel</Link>
        </div> 
        <div className='mx-4 border bg-[#BFC3C1] border-gray-300 flex justify-center items-center py-2 px-10 rounded-lg text-white font-thin'>
          <Link href="/update" className='flex gap-1 items-center font-semibold'>Update</Link>
        </div> 
      </div>
    </div>
  );
};

export default PersonalDetails;