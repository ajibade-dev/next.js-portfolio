"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return ( 
    <motion.div className="h-screen" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    
  <div className="h-full flex flex-col lg:flex-row-reverse px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
 {/* Image Container */}
 <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.3 }}
  variants={{
      hidden: { opacity: 0, x: 50 },
      visible: {opacity: 1, y: 0 }
  }}
 className="w-full lg:w-1/2 relative h-1/2 lg:h-full">
 <Image src="/hero.png" alt="picture of a man" fill  className="object-contain" />
 </motion.div>
  
 {/* Text container */}
 <div className=" flex flex-col gap-8 items-center justify-center lg:mx-auto lg:w-1/2">
  {/* title */}
  <motion.h1
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, amount: 0.5 }}
   transition={{ duration: 0.3 }}
   variants={{
       hidden: { opacity: 0, y: -50 },
       visible: {opacity: 1, y: 0 }
   }}
   className="text-3xl md:text-6xl font-bold mt-6 lg:mt-0 text-slate-800 flex"
   >Crafting Digital Experiences, Designing Tommorow</motion.h1>
  {/* description */}
  <motion.p
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, amount: 0.5 }}
   transition={{ duration: 0.5 }}
   variants={{
       hidden: { opacity: 0, y: -50 },
       visible: {opacity: 1, y: 0 }
   }} 
  className="md:text-xltext-slate-800">Welcome to my digital canvas, where innovation and creativity converges. With a keen eye for aesthetics, and a mastery of code,my portfolio showcases a diverse collection of projects that refects my commitment to excellence.</motion.p>
  {/* buttons */}
  <div className="w-full flex gap-4 py-4 sm:justify-center md:justify-normal">
    <Link href="/portfolio"><motion.button
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.3 }}
     variants={{
         hidden: { opacity: 0, y: 50 },
         visible: {opacity: 1, y: 0 }
     }}
     className="rounded-lg p-4 ring-1 ring-slate-700 bg-slate-700 text-white">View my work</motion.button></Link>
    <Link href="/contact"><motion.button
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.5 }}
     variants={{
         hidden: { opacity: 0, y: 50 },
         visible: {opacity: 1, y: 0 }
     }}
     className="rounded-lg p-4 ring-1 ring-slate-700 text-slate-700">Contact Me</motion.button>
     </Link>
    
  </div>
 </div>
  </div>
   </motion.div> 
  
  );
};

export default Homepage;
