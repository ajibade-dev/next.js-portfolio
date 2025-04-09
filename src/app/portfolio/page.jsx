"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image";
import Link from "next/link";
import ip from "../../../public/ip.png"
import three from "../../../public/space-pic.png"
import flip from "../../../public/flip.png"
import ecom from "../../../public/ecom pic.png"

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "IP Tracking website",
    desc: "A fully functional IP tracking website with a comprehensive map layout, giving accurate location of where the inputted IP is loacted.",
    img: ip,
    git: "https://github.com/ajibade-dev/ip-tracker",
    link: "https://paul-ip-tracker.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Space Website",
    desc: "This is an animated space website with information on different space planets, different working professionals and much more...",
    img: three,
    git:"https://github.com/ajibade-dev/space-website",
    link: "https://space-website-up6j.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Ecommerce Modal",
    desc: "A simple functional ecommerce modal that integrates the add-to-cart functionality.",
    img: ecom,
    git: "https://github.com/ajibade-dev/ecommerce-modal",
    link: "https://ecommerce-modal.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Memory Game",
    desc: "A simple and fun game built with react.js that implements the use of states and stacking. ",
    img: flip,
    git: "https://github.com/ajibade-dev/ecommerce-modal",
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
      <div className="h-[800vh] relative" ref={ref}>
        <div className="w-screen h-[80vh] md:h-[100vh] flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-center font-merriweather">
          MY WORKS
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden lg:px-24 px-0">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white max-w-[600px] bg-slate-600 rounded-lg items-center justify-center lg:py-6 py-3 px-3 lg:px-0">
                  <h1 className="text-xl font-bold md:text-4xl font-montserrat">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[450px] rounded-lg lg:h-[450px] xl:w-[450px] xl:h-[300px]">
                  <Image src={item.img} alt="" 
                    layout="fill"
                    objectFit="contain"
                    className=""
                    />
                  </div>
                  <p className="w-80  lg:w-3/4 font-montserrat">
                    {item.desc}
                  </p>
                  <div className="flex flex-row items-center justify-between w-full px-10">
                  <Link href={item.git} target="_blank" rel="noopener noreferrer" className=" font-montserrat flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white border-2 border-black text-gray-600 font-semibold rounded-lg">Github</button>
                  </Link>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex font-montserrat justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white border-2 border-black  text-gray-600 font-semibold rounded-lg">Live Site</button>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen flex flex-col gap-12 items-center justify-center text-center overflow-hidden">
        <h1 className="text-3xl md:text-4xl lg:text-8xl md:mt-10 lg:mt-12 mt-6 font-merriweather">Do you have a project?</h1>
          {/* download cv button */}
          <div className="relative">
          <Link href="/project.pdf" download="front-end.pdf" target="_blank" rel="noopener noreferrer" className="z-20"><button href="/front-end.pdf" className="px-3 py-3 bg-black text-white border border-white rounded-xl animate-bounce hover:bg-white hover:text-black hover:border-black  font-montserrat">Download my Resume</button></Link>
          </div>
         
        
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
              <textPath xlinkHref="#circlePath" className="text-lg ">
                Front-end Developer and Project Manager
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-sm lg:text-lg font-montserrat"
          >
            Hire Me
          </Link> 
        </div>
      </div>
    </motion.div>
  );  
};
export default PortfolioPage