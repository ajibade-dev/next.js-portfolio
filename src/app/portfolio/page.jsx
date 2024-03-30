"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image";
import Link from "next/link";
import crypto from "../../../public/crypto.png"
import three from "../../../public/3dweb.png"
import flip from "../../../public/flip.png"
import getlink from "../../../public/getlink.png"

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Crypto Landing Page",
    desc: "A simple landing crypto page for a budding crypto pproject showcasing essential features about the project. Built with React, Tailwindcss.",
    img: crypto,
    link: "https://decentalized-platform.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "3D Portfolio Website",
    desc: "A dynamic 3D portfolio website built with React.js, three.js, Tailwindcss. It delves the act of using vector and 3d images and complex animation",
    img: three,
    link: "https://react-3d-portfolio-website.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Hackathon Project",
    desc: "A two-page dynamic website for a competitve hackathin project, built with React.js, Tailwindcss, Framer motion ",
    img: getlink,
    link: "https://getlink-hackathon-chi.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Memory Game",
    desc: "A simple and fun game built with react.js that implements the use of states and stacking. ",
    img: flip,
    link: "https://react-memory-game-sigma.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[450vh] relative" ref={ref}>
        <div className="w-screen h-[80vh] md:h-[100vh] flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[450px] lg:h-[300px] xl:w-[450px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-[70vh] md:h-screen flex flex-col gap-16 items-center justify-center text-center overflow-hidden">
        <h1 className="text-3xl md:text-4xl lg:text-8xl md:pt-10 xl:pt-40">Do you have a project?</h1>
          {/* download cv button */}
         <Link href="/front-end.pdf" target="_blank" rel="noopener noreferrer" className="z-20"><button href="/front-end.pdf" className="px-3 py-3 bg-black text-white border border-white rounded-xl">Download my Resume</button></Link>
        
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Front-end Developer and Project Manager
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-sm lg:text-lg"
          >
            Hire Me
          </Link> 
        </div>
      </div>
    </motion.div>
  );  
};
export default PortfolioPage