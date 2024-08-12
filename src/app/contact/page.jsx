"use client"
useRef 
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

const text = "Say Hello to Paul"

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false)

    
    emailjs
      .sendForm(
        // process.env.NEXT_PUBLIC_SERVICE_ID,
        // process.env.NEXT_PUBLIC_TEMPLATE_ID,
        // form.current,
        // process.env.NEXT_PUBLIC_PUBLIC_KEY,
        'service_4f68wpg', 'template_eagemtm', form.current, {
          publicKey: 'cmK4ml9BuCqwTf2tg',
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true)
        },
      );
  };

  return (
    <motion.div className="h-screen" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl">
          {/* animated text */}
          <div className="font-raleway">
          {text.split("").map((letter, index) => (
            <motion.span key={index} initial={{opacity: 1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index * 0.1,}}>
                {letter}
            </motion.span>
          ))}
          😊
          </div>
        </div>
        {/* form container */}
        <form
        onSubmit={sendEmail}
        ref={form} className="h-1/2 w-full my-2 lg:mx-0 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 lg:p-24 ">
            <span className="font-montserrat">Hey Paul,</span>
            <input required type="text" className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_message"
            placeholder="Enter a message"
            />
            <span className="font-montserrat">My mail address is:</span>
            <input
            name="user_email"
            required
            type="email" className="bg-transparent border-b-2 border-b-black outline-none"/>
            <span className="font-montserrat">Regards</span>
            <button className="bg-purple-200 font-montserrat rounded font-semibold text-gray-600 p-4">Send</button>
            <div className="-mt-7">
            {success && <span className="text-green-600 font-semibold font-montserrat">Message sent successfully!😊</span>}
            {error && <span className="text-red-600 font-semibold font-montserrat">Something went wrong. Try again!</span>}
            </div>
            
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage