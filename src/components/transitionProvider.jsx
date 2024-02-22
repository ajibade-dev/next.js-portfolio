"use client"

 import { AnimatePresence, motion } from "framer-motion"
 import Navbar from "./Navbar"
import { usePathname } from "next/navigation"
import '../app/globals.css'

const TransitionProvider = ({ children }) => {
    const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen bg-gradient-to-b from-blue-100 to-red-100">
                {/* the first animation */}
                <motion.div className="h-screen w-screen fixed bg-slate-800 rounded-b-[100px] z-40" 
                animate={{height:"0vh"}}
                exit={{height:"120vh"}}
                transition={{duration: 0.5, ease:"easeOut"}}
                />

                {/* for the pathname */}
                <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit" 
                initial={{opacity:1}}
                animate={{opacity:0}}
                exit={{opacity:0}}
                transition={{duration: 0.8, ease:"easeOut"}}
                >{pathName.substring(1)}</motion.div>

                {/* the second animation */}
                <motion.div className="h-screen w-screen fixed bg-slate-800 rounded-t-[100px] bottom-0 z-40" 
                initial={{height:"120vh"}}
                animate={{height:"0vh", transition: { delay: 0.5, ease:"easeOut" }}}
                
                />
          <div className="h-24"><Navbar /></div> 
          <div className="">
          {children}
         
          </div> 
        </div>
    </AnimatePresence>
    
  )
}

export default TransitionProvider