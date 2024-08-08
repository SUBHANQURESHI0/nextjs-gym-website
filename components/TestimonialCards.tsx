"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const fitnessTestimonials = [
  {
    quote:
      "Joining this fitness program revolutionized my approach to training and helped me achieve my personal goals. The trainers are top-notch and truly dedicated!",
    name: "Jordan Smith",
    title: "Strength Training Client",
  },
  {
    quote:
      "The supportive community and tailored workouts at this gym have transformed my fitness journey. I’ve improved not only in my endurance but also in my overall well-being.",
    name: "Alex Rivera",
    title: "Endurance Athlete",
  },
  {
    quote:
      "This fitness center gave me the tools and motivation to reach new heights in my workouts. I’m incredibly grateful for the personalized coaching and guidance.",
    name: "Taylor Nguyen",
    title: "Cardio Enthusiast",
  },
  {
    quote:
      "Finding the right workout plan can be challenging, but the personalized approach here matched me with a trainer who understands my unique fitness goals and challenges.",
    name: "Morgan Davis",
    title: "Yoga Practitioner",
  },
  {
    quote:
      "The nutrition and fitness programs offered here provided me with a comprehensive approach to achieving my health goals. Highly recommended for anyone serious about their fitness journey!",
    name: "Jamie Lee",
    title: "Wellness and Nutrition Client",
  },
];

function FitnessSchoolTestimonial() {
  return <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white mt-3">Achieve and Inspire: Real Results from Our Fitness Family</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-6xl">
    <InfiniteMovingCards
        items={fitnessTestimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  </div>;
}

export default FitnessSchoolTestimonial;
