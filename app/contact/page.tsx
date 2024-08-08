'use client';


import { Meteors } from '@/components/ui/meteors';
import Link from 'next/link';

export default function page() {
  return (
    <div className="flex items-center justify-center bg-gray-700">
      <div className=" w-full relative max-w-xs mt-24">
        <div className="absolute inset-0 max-h-2 w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"></div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            We're Here to Help You Achieve Your Fitness Goals
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            At FitLife Gym, we're dedicated to supporting you every step of the
            way on your fitness journey. Whether you have questions about our
            programs, need assistance with your membership, or want to learn
            more about our facilities and services, our friendly and
            knowledgeable team is here to assist you. Don't hesitate to reach
            out via phone, email, or by visiting us in person. We look forward
            to connecting with you and helping you reach your health and
            wellness goals.
          </p>
           <Link href={'/'}>
           <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Contact
          </button>
           </Link>
          

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}