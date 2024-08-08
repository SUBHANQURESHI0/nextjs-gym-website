'use client'


import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {

  const featuredWorkouts = [
    {
      title: 'Foundations of Strength Training',
      description:
        'Master the basics of strength training to build a solid foundation for your fitness journey.',
      slug: 'foundations-of-strength-training',
      isFeatured: true,
    },
    {
      title: 'High-Intensity Interval Training (HIIT)',
      description:
        'Discover the benefits of HIIT with expert guidance on maximizing your workout efficiency.',
      slug: 'high-intensity-interval-training',
      isFeatured: true,
    },
    {
      title: 'Advanced Cardio Techniques',
      description:
        'Take your cardio workouts to the next level with advanced techniques and strategies.',
      slug: 'advanced-cardio-techniques',
      isFeatured: true,
    },
    {
      title: 'Nutrition for Optimal Performance',
      description:
        'Learn how to fuel your workouts with the right nutrition to enhance your overall performance.',
      slug: 'nutrition-for-optimal-performance',
      isFeatured: true,
    },
    {
      title: 'Flexibility and Mobility',
      description:
        'Improve your flexibility and mobility with targeted exercises and stretching routines.',
      slug: 'flexibility-and-mobility',
      isFeatured: true,
    },
    {
      title: 'Effective Recovery Techniques',
      description:
        'Understand and implement effective recovery techniques to aid muscle repair and reduce injury risk.',
      slug: 'effective-recovery-techniques',
      isFeatured: true,
    },
  ];
  
  return (
    <div className="p-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WORKOUTS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Elevate Your Fitness Experience
            </p>
        </div>
        <div className="mt-10">
           <HoverEffect items={featuredWorkouts.map(webinar =>(
            {
              title:webinar.title,
              description:webinar.description,
              link:'/'
            }
           ))}/>
        </div>
        <div className="mt-10 text-center">
          <Link href={'/'} className="px-4 py-2 rounded border border-neutral-600
           text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Webinars
          </Link>
        </div>
    </div>
    </div>
  )
}

export default UpcomingWebinars