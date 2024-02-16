"use client"
import { motion } from "framer-motion"

const Testpage = () => {
 const variants = {
    variant1:{
        x: 300,
        y:200,
        opacity: 0.5,
    },
    variant2:{
        x: 100,
        y: -300,
        rotation: 90
    }
 }

  return (
    <div className='flex items-center justify-center h-full'>
        <motion.div className='w-96 h-96 bg-red-500 rounded-md' 
        initial={{ x:-100}}
        variants={variants} 
        animate="variant1"
        transition={{ delay: 2, duration: 6 }}
        >
        </motion.div>
    </div>
  )
}

export default Testpage