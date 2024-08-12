"use client"
import { motion, useScroll, useInView } from "framer-motion"
import Brain from "../../components/Brain"
import { useRef } from "react"



const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  
  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      
      {/*main container */}
       <div className="h-full overflow-scroll lg:flex relative">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-2/3">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* biography title */}
          <h1 className="font-bold text-2xl font-merriweather tracking-wider">ABOUT ME</h1>
          {/* biography description */}
          <p className="text-lg text-justify font-montserrat">I am a dynamic professional skilled in both front-end engineering and project management. With expertise in HTML, CSS, JavaScript, and frameworks like React and Next.js, I specialize in crafting captivating user experiences and robust web applications.

As a project manager, I excel in orchestrating teams and resources to deliver projects on time and within budget. Through effective communication and strategic planning, I ensure project milestones are met with precision, driving innovation and exceeding expectations.

Combining technical proficiency with leadership acumen, I am committed to delivering exceptional digital solutions that shape the future of web development.</p>
          {/* signature */}
            <div className="self-end">
            <svg width="160" height="100" viewBox="0 0 213 165" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4C5 23.2917 9.0014 42.38 12.2222 61.3333C15.4748 80.4735 17.3354 100.275 19.5556 119.556C20.0536 123.881 20 128.213 20 132.556C20 133.276 20 136.875 20 133.556C20 121.249 20.4539 108.689 16.7778 96.7778C10.7141 77.1316 8 57.6894 8 37.2222C8 31.4074 8 25.5926 8 19.7778C8 17.7795 7.24028 13.3101 8.22222 11.4444C10.0118 8.04421 16.9983 5.56886 20.2222 3.77778C24.679 1.30177 33.2524 0.511296 37.2222 4.22222C43.3764 9.97507 49.7107 18.5434 50 27.2222C50.146 31.6027 51.979 36.1112 50.7778 40.5556C49.5595 45.063 42.7656 50.9421 38.7778 52.7778C30.1798 56.7356 24.1999 59 15 59" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M64 91C64 78.9538 54.3229 80 45 80C34.5013 80 36.3697 107 45.4444 107C57.3014 107 65 98.6083 65 87.1111C65 86.2687 65.1173 89.7175 65.4444 90.4444C67.3335 94.6423 69 98.3396 69 103C69 105.764 69.7629 109 73 109" stroke="black" stroke-width="3" stroke-linecap="round"/>
        <path d="M79 72C79.4235 80.8935 81.3409 89.8909 82.2222 98.7778C82.7212 103.809 84.1658 110.225 88.5556 113.444C99.4461 121.431 99 91.5279 99 85.5556C99 83.5741 99 81.5926 99 79.6111C99 73.1704 102.267 92.0724 103.778 98.3333C104.677 102.059 105.928 109.957 108.667 112.944C110.399 114.834 114.649 114 117 114" stroke="black" stroke-width="3" stroke-linecap="round"/>
        <path d="M128 46C128 70.5903 124.409 95.0835 125.056 119.667C125.21 125.54 126.265 131.106 127.444 136.833C127.815 138.634 127.418 142.16 129.056 143.389C136.651 149.085 139 132.378 139 128" stroke="black" stroke-width="3" stroke-linecap="round"/>
        <path d="M2 82C66.2176 66.7906 132.324 56.5361 198.444 56C199.699 55.9898 220.175 54.6835 207.167 57.3333C176.683 63.543 145.858 66.0265 114.944 69.0556C95.9484 70.9168 76.6935 72.581 57.8889 76C56.2841 76.2918 53.1669 76.4119 52.5556 78.3333C49.2988 88.5688 69.2004 91.5245 74.1111 92.2222C98.8118 95.7319 125.305 94.0668 148.667 84.8889C188.664 69.1755 67.3841 114.949 24.7778 120.556C21.1029 121.039 8.75385 121.558 22.5 120.167C68.3863 115.523 114.066 109.65 159.778 103.556C164.206 102.965 177.013 102.496 172.889 100.778C167.854 98.6799 162.107 98.2381 156.722 98.0556C148.163 97.7654 139.564 98 131 98" stroke="black" stroke-width="3" stroke-linecap="round"/>
        <path d="M132 55C129.446 49.0396 119.03 46.6702 113.778 45.3333C96.8429 41.0226 77.8895 41.1618 63.8889 52.9444C55.5718 59.944 45.7564 73.5003 52 84.6667C57.901 95.2204 70.4189 101.283 81.1111 105.833C92.4523 110.659 74.6626 129.001 67.6667 131.333C58.6612 134.335 61.249 111.529 61.4444 108C62.4612 89.639 66.3331 70.6312 71.4444 53C75.5338 38.8939 85 22.784 85 7.66666C85 6.64815 85 5.62963 85 4.61111C85 4.02991 84.3583 5.58511 84.1111 6.11111C79.7717 15.3439 76.4589 25.135 73.5556 34.8889C62.1285 73.2787 62.9644 110.956 67.2222 150.222C67.6889 154.526 68 158.681 68 163" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
            {/* biography scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            {/* svg on the other side */}
          </div>
          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skill title */}
          <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{ delay: 0.4}} className="font-bold text-2xl font-merriweather tracking-wider">SKILLS</motion.h1>

          {/* skill list */}
          <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{ delay: 0.2}} className="flex gap-4 flex-wrap font-montserrat">
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Javascript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Typescript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Tailwind CSS</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Framer Motion</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Next.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">React.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Redux toolkit</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-white hover:text-black">Three.js</div>
          </motion.div>
        {/*  skill scroll svg */}
        <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* experience title */}
          <motion.h1 initial={{x: "-300px"}} animate={isExperienceRefInView ? {x:'0'} : {}} transition={{delay: 0.2}} className="font-bold text-2xl font-merriweather tracking-wider">EXPERIENCE</motion.h1>
          {/* experience list */}
          <motion.div
          initial={{x: "-300px"}} animate={isExperienceRefInView ? {x:'0'} : {}} transition={{delay: 0.2}}
          className="">

            {/* the first one */}
            {/* experience list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3">
                {/* job title */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Junior Project Manager</div>
                {/* job description */}
              <div className="p-3 text-sm font-montserrat">Managed and collaborated a project for a start-up company </div> 
                {/* job date */}
                <div className="p-3 text-red-400 font-semibold text-sm font-montserrat">2022 - Present</div> 
                {/* company name */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Taskimony</div> 
              </div>
              {/* center */}
              <div className="w-1/6 flex justify-center">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 relative">
                  {/*line circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3"></div>
            </div>

            {/* the second one */}
            {/* experience list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3">
                
              </div>
              {/* center */}
              <div className="w-1/6 flex justify-center">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 relative">
                  {/*line circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3">
                {/* job title */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Front-end Developer</div>
                {/* job description */}
                 <div className="p-3 text-sm font-montserrat">Designed a pixel-perfect two-page animated website in a competitve hackathon</div>  
                {/* job date */}
                <div className="p-3 text-red-400 font-semibold text-sm font-montserrat">2023</div> 
                {/* company name */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Hackathon Project</div> 
              </div>
            </div>

          </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
       </div>
    </motion.div>
  )
}

export default AboutPage