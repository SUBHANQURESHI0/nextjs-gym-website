"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const fitnessSchoolContent = [
    {
      title: 'Transform Your Fitness Journey: Personalized Training Awaits',
      description:
        'Embark on a fitness journey tailored specifically to your needs. Our personalized training programs are designed to adapt to your individual goals and fitness levels, setting the stage for remarkable progress and transformation. At our fitness center, your goals meet our expert guidance, creating a path to your best self.',
    },
    {
      title: 'Achieve Your Goals with Expert Guidance',
      description:
        'Experience a training program that’s as unique as you are. Our certified trainers provide personalized support and tailored workout plans to help you reach your fitness goals efficiently and effectively. Join us to enjoy a customized approach that maximizes your potential and keeps you motivated.',
    },
    {
      title: 'Holistic Approach to Fitness',
      description:
        'Our holistic fitness approach integrates strength training, cardio, flexibility, and nutrition to create a comprehensive wellness plan. We focus on the complete picture of health, ensuring that you not only get fit but also maintain a balanced and sustainable lifestyle.',
    },
    {
      title: 'Real-Time Feedback & Engagement',
      description:
        'Immerse yourself in an interactive training experience where feedback is immediate, just like real-time adjustments in a workout session. This approach enhances your understanding and mastery of fitness techniques and ensures you stay on track with your goals.',
    },
    {
      title: 'Innovative Training Programs',
      description:
        'Our training programs are continuously updated to include the latest fitness trends and techniques, ensuring you’re always engaged with the most effective and modern methods. Say goodbye to outdated routines and embrace an approach that evolves with the fitness industry.',
    },
    {
      title: 'Endless Fitness Opportunities',
      description:
        'With our extensive resource library and dynamic workout offerings, you’ll always find something new to explore. Our platform provides ongoing opportunities for growth, ensuring your fitness journey remains exciting and challenging.',
    },
  ];
  


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={fitnessSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs