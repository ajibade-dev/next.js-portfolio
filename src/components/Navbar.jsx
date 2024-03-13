"use client"

import Link from "next/link"
import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "../components/NavLink"
const links =[
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
];

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants ={
    closed:{
    rotate:0,
    },
    opened:{
      rotate: 45,
      backgroundColor:"rgb(255,255,255)"
    }
  }

const centerVariants ={
    closed:{
    opacity:1,
    },
    opened:{
      opacity: 0,
    }
  }

  const bottomVariants ={
    closed:{
    rotate:0,
    },
    opened:{
      rotate: -45,
      backgroundColor:"rgb(255,255,255)"
    }
  }

  const listVariants={
    closed:{
      x:"100vw"
    },
    opened:{
      x: 0,
      transition:{
        when:"beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listItemVariants={
    closed:{
      x: -10,
      opacity:0
    },
    opened:{
      x:0,
      opacity: 1
    }
  }

  return (
    <div className="h-full items-center justify-between flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-base">
      
      {/* logo */}
      <div className="">
        <Link href="/" className="text-sm bg-slate-700 rounded-md p-1 font-semibold flex justify-center items-center">
        <span className="text-white mr-1">Paul</span>
        <span className="w-16 h-8 rounded bg-white text-slate-700 flex justify-center items-center">The Dev</span>
        </Link>
      </div>

      {/* menu for md screens and up */}
      <div className="hidden md:flex gap-4">
        {links.map(link =>(
          // <Link href={link.url} key={link.title}>{link.title}</Link>
          <NavLink link={link} key={link.title}/>
        ))}
      </div>

    {/* the social icons */}
    <div className="flex gap-4">
          <Link href="https://github.com/ajibade-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="github" width={24} height={24} />
          </Link>

          <Link href="https://www.linkedin.com/in/ajibade-paul/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="linkedin" width={24} height={24} />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=08187977707" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.png" alt="whatsapp" width={32} height={32} />
          </Link>
    </div>

      {/* menu for small screens */}
      <div className="md:hidden">
        {/* menu button */}
      <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
        <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
        <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>

        {/* menu list */}
        {open && (<motion.div variants={listVariants} initial="closed" animate="opened" className="absolute z-40 top-0 left-0 w-screen h-screen bg-slate-700 text-white flex items-center justify-center gap-8 flex-col text-4xl">
          
          {links.map( link => (
            <motion.div variants={listItemVariants} key={link.title}><Link href={link.url}>{link.title}</Link>
            </motion.div>

          ))}
        </motion.div>
         )}
      </div>
    </div>
  )
}

export default Navbar