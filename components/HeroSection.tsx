import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex
     flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 text-white"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center ">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl 
        font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Transform Your Body
        </h1>
        <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto
         flex-col justify-center items-center">
          Achieve your fitness goals with our personalized training programs.
          Whether you're looking to lose weight, build muscle, or improve your
          overall health, our expert trainers and tailored workout plans will
          guide you every step of the way. Join us and start your journey to a
          healthier, stronger you.
          <div className="font-bold text-3xl"> Ready to transform? </div>
        </div>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection