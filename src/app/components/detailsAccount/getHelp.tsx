'use client'
import React, { useState } from 'react';
import { MessageSquare, MailOpen, Mail, Smartphone, ArrowRight, ArrowDown } from 'lucide-react';
import { faqsData } from "@/common/faqsdata";

const GetHelp = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Extract the first section of the faqsData
  const registrationFAQs = faqsData[0]; 

  const toggleAnswer = (questionIndex: number) => {
    setActiveQuestion(activeQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <>
      {/* Help Buttons */}
      <div className="hidden md:flex gap-4 mt-5"> {/* Hide on mobile */}
        <button className="flex flex-1 items-center border font-semibold border-gray-200 rounded-lg py-2 px-4">
          <MessageSquare className="mr-2 text-gray-400" />
          Chat with Us
        </button>

        <button className="flex flex-1 items-center border font-semibold border-gray-200 rounded-lg py-2 px-4">
          <MailOpen className="mr-2 text-gray-400" />
          Email Us
        </button>

        <button className="flex flex-1 items-center border font-semibold border-gray-200 rounded-lg py-2 px-4">
          <Smartphone className="mr-2 text-gray-400" />
          Call Us
        </button>
      </div>

      {/* FAQ Section */}
      <div>
        <h1 className="md:text-2xl  pl-5 md:pl-0 font-semibold text-gray-500 mt-10">FAQ</h1>
        <div className="space-y-6 md:mt-5 mt-2 px-5 md:px-0">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="space-y-3">
              {registrationFAQs.questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                  <h3
                    className="flex justify-between items-center font-semibold text-black cursor-pointer"
                    onClick={() => toggleAnswer(questionIndex)}
                  >
                    {question.q}
                    {activeQuestion === questionIndex ? (
                      <ArrowDown className="text-gray-500" />
                    ) : (
                      <ArrowRight className="text-gray-500" />
                    )}
                  </h3>
                  {activeQuestion === questionIndex && (
                    <p className="text-gray-600 mt-1">{question.a}</p>
                  )}
                </div>
              ))}
            </div>
            
          </div>
          <div className='md:hidden'>
                <h1 className=' text-gray-500 font-semibold pb-2'>Get custom supports</h1>
                <div className='border border-gray-200 px-5 rounded-lg '>
                <p className='flex gap-3 font-semibold items-center py-5'><Mail size={20} className='text-gray-500'/>Email Us</p>
                <p className='flex gap-3 font-semibold items-center pb-5 '><Smartphone size={20} className='text-gray-500'/>Call us at 00911800123456</p>
                </div>
                
            </div>
        </div>
      </div>
    </>
  );
};

export default GetHelp;