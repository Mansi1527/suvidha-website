import { CircleUser , MapPin, ShoppingCart, Star } from 'lucide-react';
import React from 'react';
import PersonalDetails from '../detailsAccount/personalDetails';
import Myorders from '../detailsAccount/myorders';
import SavedAddress from '../detailsAccount/savedAddress';
import Favorites from '../detailsAccount/Favorites';
import GetHelp from '../detailsAccount/getHelp';

interface Item {
  id: string;
  logo: React.ReactNode;
  name: string;
  desc: string;
}

interface PageProps {
  active: string | null;
}

const Page = ({ active }: PageProps) => {
  const data1: Item[] = [
    { id: "1", logo: <CircleUser  className="text-gray-500" />, name: "Personal details", desc: "Add, Change personal information" },
    { id: "2", logo: <ShoppingCart className="text-gray-500" />, name: "My Orders", desc: "See live, past & cancelled orders" },
    { id: "3", logo: <MapPin className="text-gray-500" />, name: "My Saved Addresses", desc: "Manage addresses" },
    { id: "4", logo: <Star className="text-gray-500" />, name: "Favorites", desc: "Saved products" },
    { id: "5", logo: <Star className="text-gray-500" />, name: "SPAR Support", desc: "Help, support, chat with us & call" },
  ];

  
  const userDetails = {
    name: "John Doe",
    dob: 1990,
    email: "john.doe@example.com"
  };

  return (
    <div className='md:w-[70%] bg-gray-100 w-full h-screen md:mt-10 rounded-lg md:bg-white md:px-8'>
      {data1.map((item) => (
        active === item.id && (
          <div key={item.id} className=""> 
        {/* mobile */}
            <div className="block md:hidden bg-green-900 text-white p-4 ">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>

            
            <li className="hidden md:flex space-x-4 rounded-lg mt-4">
              <div>
                <h3 className="text-md font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm pt-1">{item.desc}</p>
              </div>
            </li>

            <hr className="hidden  md:flex border-t-2 mt-2 border-gray-200" />
            <div className=''>
            {item.id === "1" && <PersonalDetails name={userDetails.name} dob={userDetails.dob} email={userDetails.email} />}
            {item.id === "2" && <Myorders />}
            {item.id === "3" && <SavedAddress />}
            {item.id === "4" && <Favorites />}
            {item.id === "5" && <GetHelp />}
            </div>
            
          </div>
        )
      ))}
    </div>
  );
};

export default Page;