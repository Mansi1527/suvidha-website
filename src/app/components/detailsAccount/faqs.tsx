'use client'
import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { faqsData } from "@/common/faqsdata"

type Question = {
  q: string;
  a: string;
};

type Section = {
  desc: string;
  questions: Question[];
};

const faqs = () => {
  const [activeQuestion, setActiveQuestion] = useState<{ sectionIndex: number, questionIndex: number } | null>(null);

  const toggleAnswer = (sectionIndex: number, questionIndex: number) => {
    setActiveQuestion(activeQuestion?.sectionIndex === sectionIndex && activeQuestion?.questionIndex === questionIndex 
      ? null 
      : { sectionIndex, questionIndex });
  };

  const renderQuestion = (question: Question, sectionIndex: number, questionIndex: number) => (
    <div key={questionIndex}>
      <h3
        className="font-semibold text-lg cursor-pointer flex justify-between"
        onClick={() => toggleAnswer(sectionIndex, questionIndex)}
      >
        {question.q} 
        {activeQuestion?.sectionIndex === sectionIndex && activeQuestion?.questionIndex === questionIndex 
          ? <ArrowDown /> 
          : <ArrowRight />}
      </h3>
      {activeQuestion?.sectionIndex === sectionIndex && activeQuestion?.questionIndex === questionIndex && (
        <p className="text-gray-500 bg-white rounded-md mt-2">
          {question.a}
        </p>
      )}
    </div>
  );

  return (
    <div className="flex justify-center p-5 ">
      <div className="md:max-w-[80%] md:min-w-[80%]">
        <h1 className="text-3xl font-semibold mb-3">FAQs</h1>
        <p className="text-gray-600 mb-6">Additional Information</p>
        <hr className="border-t-2 border-gray-300 my-4" />

        {faqsData.map((section: Section, sectionIndex: number) => (
          <div key={sectionIndex} className="rounded-md">
            <h2 className="font-semibold text-gray-400 mb-4 pt-2">{section.desc}</h2>
            <div className="space-y-4 border border-gray-300 rounded-lg p-5">
              {section.questions.map((question, questionIndex) => renderQuestion(question, sectionIndex, questionIndex))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default faqs;
