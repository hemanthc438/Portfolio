import profilePic from "../assets/profile.jpeg"
import { PROFILE_CONTENT } from "../cosntants"
import {animate, motion} from "framer-motion"

const container = (delay) =>({
    hidden:{ x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay :delay}
    }
});
const Profile = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        style={{ fontFamily: 'Sour Gummy, sans-serif' }}
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        HEMANTH
                        <a href="/public/resume.pdf" download="resume.pdf">
                    <button style={{width:100}}className="hover ml-10 text-2xl bg-blue-900 rounded-2xl border border-neutral-700">Resume</button>
                    </a>
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        style={{ fontFamily: 'Sour Gummy, sans-serif' }}
                        className="bg-gradient-to-r from-red-900 via-slate-500 to-indigo-500 bg-clip-text text-4xl tracking-tight text-transparent"> Front End Developer</motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-lighter tracking-tighter">{PROFILE_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-100 lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:0.75}}
                        className="rounded-3xl" src={profilePic}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile