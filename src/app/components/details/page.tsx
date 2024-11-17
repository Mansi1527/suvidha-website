'use client';
import { CircleUser, MapPin, ShoppingCart, Star, ArrowLeft, HelpCircle, FileText } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import PersonalDetails from '../detailsAccount/personalDetails';
import Myorders from '../detailsAccount/myorders';
import SavedAddress from '../detailsAccount/savedAddress';
import Favorites from '../detailsAccount/Favorites';
import GetHelp from '../detailsAccount/getHelp';
import FAQs from '../detailsAccount/faqs';
import PrivacyPolicy from '../detailsAccount/Privacyplociy';
import Terms from '../detailsAccount/Terms&policies';
import PersonalDetailsMobile from '../detailsAccount/mobile/personalDetails';

const Page = ({ active }: { active: string | null }) => {
  const data1 = [
    { id: "1", logo: <CircleUser className="text-gray-500" />, name: "Personal details", desc: "Add, Change personal information" },
    { id: "2", logo: <ShoppingCart className="text-gray-500" />, name: "My Orders", desc: "See live, past & cancelled orders" },
    { id: "3", logo: <MapPin className="text-gray-500" />, name: "My Saved Addresses", desc: "Manage addresses" },
    { id: "4", logo: <Star className="text-gray-500" />, name: "Favorites", desc: "Saved products" },
    
  ];

  const data2 = [
   
    { id: "5", name: "FAQs",desc:"Additional Information", component: <FAQs /> },
    { id: "6", logo: <HelpCircle className="text-gray-500" />, name: "Get Help", desc: "Help,support,chat with us & call" },
    { id: "7", name: "Privacy Policy",desc:"terms & services", component: <PrivacyPolicy /> },
    { id: "8", name: "Terms and Conditions",desc:"privacy policy", component: <Terms /> },
  ];

  const userDetails = {
    name: "John Doe",
    dob: 1990,
    email: "john.doe@example.com"
  };

  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDetailClick = (id: string) => {
    setActiveDetail(activeDetail === id ? null : id);
  };

  const handleBackClick = () => {
    setActiveDetail(null);
  };

  return (
    <div className="md:w-[70%] bg-gray-100 w-full h-full md:mt-10 rounded-lg md:bg-white md:px-8">
      {/* Mobile Header */}
      <div className="md:hidden bg-green-900 text-white p-4 flex items-center">
        {activeDetail && (
          <button onClick={handleBackClick} className="text-white mr-2">
            <ArrowLeft />
          </button>
        )}
        {activeDetail === null ? (
          <h3 className="text-lg font-semibold">Profile</h3>
        ) : (
          (data1.find(item => item.id === activeDetail) || data2.find(item => item.id === activeDetail)) && (
            <div className="ml-2">
              <h3 className="text-lg font-semibold">
                {(data1.find(item => item.id === activeDetail)?.name || data2.find(item => item.id === activeDetail)?.name)}
              </h3>
              <p className="text-sm text-gray-300">
                {data1.find(item => item.id === activeDetail)?.desc || ""}
              </p>
            </div>
          )
        )}
      </div>

      
      {/* Mobile View */}
<div className="block md:hidden p-4">
  {activeDetail === null ? (
    <>
      <p className="text-gray-500 pb-2">My Account</p>
      <div className="bg-white rounded-xl px-4 py-2">
        {data1.map((item) => (
          <div key={item.id} className="pb-2 border-gray-200">
            <div
              className="flex justify-between items-center pt-2 cursor-pointer"
              onClick={() => handleDetailClick(item.id)}
            >
              <div className="flex items-center">
                {item.logo}
                <span className="font-semibold text-sm pl-2">{item.name}</span>
              </div>
              <span className="text-gray-500">+</span>
            </div>
            <span className="pl-8 text-xs text-gray-500">{item.desc}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl px-4 pb-5 mt-10">
        {data2.map((item) => (
          <div key={item.id} className="pt-2 py-5 border-gray-200">
            <div
              className="flex justify-between items-center pt-2 cursor-pointer"
              onClick={() => handleDetailClick(item.id)}
            >
              <div className="flex items-center">
                <FileText className="text-gray-500" />
                <span className="font-semibold text-sm pl-2">{item.name}</span>
              </div>
              <span className="text-gray-500">+</span>
            </div>
            <span className="text-sm text-gray-500 pl-8">{item.desc}</span>
          </div>
        ))}
      </div>
    </>
  ) : (
    <div className="mt-2">
      {activeDetail === "1" && (
        <PersonalDetailsMobile
          name={userDetails.name}
          dob={userDetails.dob}
          email={userDetails.email}
        />
      )}
      {activeDetail === "2" && <Myorders />}
      {activeDetail === "3" && <SavedAddress />}
      {activeDetail === "4" && <Favorites />}
      {activeDetail === "5" && <GetHelp />}
      {activeDetail === "6" && <FAQs />}
      {activeDetail === "7" && <PrivacyPolicy />}
      {activeDetail === "8" && <Terms />}
    </div>
  )}
</div>


      {/* Desktop View */}
      <div className="hidden md:block">
        {data1.map((item) => (
          active === item.id && (
            <div key={item.id}>
              <li className="flex space-x-4 rounded-lg mt-4">
                <div>
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm pt-1">{item.desc}</p>
                </div>
              </li>
              <hr className="border-t-2 mt-2 border-gray-200" />
              <div>
                {item.id === "1" && <PersonalDetails name={userDetails.name} dob={userDetails.dob} email={userDetails.email} />}
                {item.id === "2" && <Myorders />}
                {item.id === "3" && <SavedAddress />}
                {item.id === "4" && <Favorites />}
                {item.id === "5" && <GetHelp />}
              </div>
            </div>
          )
        ))}
        <hr className="my-4 border-gray-300" />
        {data2.map((item) => (
          active === item.id && (
            <div key={item.id} className="mt-4">
              <h3 className="text-md font-semibold">{item.name}</h3>
              <div className="mt-2">{item.component}</div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Page;
