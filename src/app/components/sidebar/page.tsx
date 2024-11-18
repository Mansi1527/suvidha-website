// 'use client';
// import React, { useState } from 'react';
// import { CircleUser , ShoppingCart, MapPin, Star, CircleHelp, Smartphone, Copyright, ArrowRight } from 'lucide-react';
// import Link from 'next/link'; // Link component for redirection

// const Page = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const data1 = [
//     { logo: <CircleUser  className="text-gray-500 md:size-5 size-3" />, name: "Personal details", desc: "Add, Change personal information" },
//     { logo: <ShoppingCart className="text-gray-500 md:size-5 size-3" />, name: "My Orders", desc: "See live, past & cancelled orders" },
//     { logo: <MapPin className="text-gray-500 md:size-5 size-3" />, name: "My Saved Addresses", desc: "Manage addresses" },
//     { logo: <Star className="text-gray-500 md:size-5 size-3" />, name: "Favorites", desc: "Saved products" },
//   ];

//   const data2 = [
//     { logo: <CircleHelp className="text-gray-500 md:size-5 size-3" />, name: "FAQs", desc: "Additional information", link: "/faq" },
//     { logo: <Smartphone className="text-gray-500 md:size-5 size-3" />, name: "Get Help", desc: "Help, support, chat with us & call" },
//     { logo: <Copyright className="text-gray-500 md:size-5 size-3" />, name: "Terms & Conditions", desc: "Terms & services", link: "/Terms&Policy" },
//     { logo: <Copyright className="text-gray-500 md:size-5 size-3" />, name: "Privacy Policy", desc: "Privacy policy", link: "/privacy-policy" },
//   ];

//   return (
//     <div className="hidden md:block max-w-[90%] md:max-w-[26%] ml-16">
//       {/* First Section */}
//       <div className="bg-white mt-10 rounded-lg overflow-hidden shadow-md">
//         <ul className="space-y-4 pb-5">
//           {data1.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center space-x-4 pb-2 px-5 pt-4 rounded-lg ${activeIndex === index ? 'bg-[#e5e7e6] rounded-none' : 'bg-white'}`}
//               onClick={() => setActiveIndex(index)}
//             >
//               <h1 className="md:size-5 size-1">{item.logo}</h1>
//               <div>
//                 <h3 className={`text-md font-semibold ${activeIndex === index ? 'text-[#2e9571]' : 'text-black'}`}>
//                   {item.name}
//                 </h3>
//                 <p className={`text-gray-500 text-xs pt-1 ${activeIndex === index ? 'text-[#2e9571]' : 'text-black'}`}>
//                   {item.desc}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Second Section */}
//       <div className="bg-white mt-5 rounded-lg overflow-hidden mb-10 shadow-md">
//         <ul className="space-y-4 pb-5">
//           {data2.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center space-x-4 pb-2 px-5 pt-2 rounded-lg hover:bg-[#e5e7e6]"
//             >
//               {item.logo}
//               <div>
//                 <h3 className="text-md font-semibold text-black">
//                   {item.link ? (
//                     <Link href={item.link}>{item.name}</Link>
//                   ) : (
//                     item.name
//                   )}
//                 </h3>
//                 <p className="text-gray-500 text-xs pt-1">
//                   {item.desc}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Logout Section */}
//       <div className="border-2 border-gray-300 flex justify-center items-center py-2 px-5 mb-10 rounded-lg text-red-500">
//         <Link href="/logout" className="flex gap-1 items-center font-semibold">
//           Logout <ArrowRight size={15} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Page;

'use client';
import React, { useState } from 'react';
import { CircleUser , ShoppingCart, MapPin, Star, CircleHelp, Smartphone, Copyright, ArrowRight } from 'lucide-react';
import Link from 'next/link'; // Link component for redirection
import { useRecoilState } from 'recoil';
import States from '@/Recoil/States';
const Page = () => {
  const [activeIndex, setActiveIndex] = useRecoilState(States)
console.log(activeIndex)
  const data1 = [
    { logo: <CircleUser  className="text-gray-500 md:size-5 size-3" />, name: "Personal details", desc: "Add, Change personal information" },
    { logo: <ShoppingCart className="text-gray-500 md:size-5 size-3" />, name: "My Orders", desc: "See live, past & cancelled orders" },
    { logo: <MapPin className="text-gray-500 md:size-5 size-3" />, name: "My Saved Addresses", desc: "Manage addresses" },
    { logo: <Star className="text-gray-500 md:size-5 size-3" />, name: "Favorites", desc: "Saved products" },
  ];

  const data2 = [
    { logo: <CircleHelp className="text-gray-500 md:size-5 size-3" />, name: "FAQs", desc: "Additional information", link: "/faq" },
    { logo: <Smartphone className="text-gray-500 md:size-5 size-3" />, name: "Get Help", desc: "Help, support, chat with us & call" },
    { logo: <Copyright className="text-gray-500 md:size-5 size-3" />, name: "Terms & Conditions", desc: "Terms & services", link: "/Terms&Policy" },
    { logo: <Copyright className="text-gray-500 md:size-5 size-3" />, name: "Privacy Policy", desc: "Privacy policy", link: "/privacy-policy" },
  ];

  return (
    <div className="hidden md:block max-w-[90%] md:max-w-[26%] ml-16">
      {/* First Section */}
      <div className="bg-white mt-10 rounded-lg overflow-hidden shadow-md">
        <ul className="space-y-4 pb-5">
          {data1.map((item, index:any) => (
            <li
              key={index}
              className={`flex items-center space-x-4 pb-2 px-5 pt-4 rounded-lg ${activeIndex === index ? 'bg-[#e5e7e6] rounded-none' : 'bg-white'}`}
              onClick={() => setActiveIndex(index)}
            >
              <h1 className="md:size-5 size-1">{item.logo}</h1>
              <div>
                <h3 className={`text-md font-semibold ${activeIndex === index ? 'text-[#2e9571]' : 'text-black'}`}>
                  {item.name}
                </h3>
                <p className={`text-gray-500 text-xs pt-1 ${activeIndex === index ? 'text-[#2e9571]' : 'text-black'}`}>
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Second Section */}
      <div className="bg-white mt-5 rounded-lg overflow-hidden mb-10 shadow-md">
        <ul className="space-y-4 pb-5">
          {data2.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 pb-2 px-5 pt-2 rounded-lg hover:bg-[#e5e7e6]"
            >
              {item.logo}
              <div>
                <h3 className="text-md font-semibold text-black">
                  {item.link ? (
                    <Link href={item.link}>{item.name}</Link>
                  ) : (
                    item.name
                  )}
                </h3>
                <p className="text-gray-500 text-xs pt-1">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Section */}
      <div className="border-2 border-gray-300 flex justify-center items-center py-2 px-5 mb-10 rounded-lg text-red-500">
        <Link href="/logout" className="flex gap-1 items-center font-semibold">
          Logout <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default Page;