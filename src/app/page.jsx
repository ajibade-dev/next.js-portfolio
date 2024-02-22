"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return ( 
    <motion.div className="h-screen" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    
  <div className="h-full flex flex-col lg:flex-row-reverse px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
 {/* Image Container */}
 <div className="w-full lg:w-1/2 relative h-1/2 lg:h-full">
 <Image src="/hero.png" alt="picture of a man" fill  className="object-contain" />
 </div>
  
 {/* Text container */}
 <div className=" flex flex-col gap-8 items-center justify-center lg:mx-auto lg:w-1/2">
  {/* title */}
  <h1 className="text-3xl md:text-6xl font-bold mt-6 lg:mt-0 text-slate-800 flex">Crafting Digital Experiences, Designing Tommorow</h1>
  {/* description */}
  <p className="md:text-xltext-slate-800">Welcome to my digital canvas, where innovation and creativity converges. With a keen eye for aesthetics, and a mastery of code,my portfolio showcases a diverse collection of projects that refects my commitment to excellence.</p>
  {/* buttons */}
  <div className="w-full flex gap-4 py-4 sm:justify-center md:justify-normal">
    <button className="rounded-lg p-4 ring-1 ring-slate-700 bg-slate-700 text-white">View my work</button>
    <button className="rounded-lg p-4 ring-1 ring-slate-700 text-slate-700">Contact Me</button>
    
  </div>
 </div>
  </div>
   </motion.div> 
  
  );
};

export default Homepage;
