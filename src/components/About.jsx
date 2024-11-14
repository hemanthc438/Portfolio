import about from "../assets/about.jpeg"
import { ABOUT_TEXT } from "../cosntants"
import { motion } from "framer-motion"
function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl" style={{ fontFamily: 'Sour Gummy, sans-serif' }}>About Me</h2>
        <div className="flex flex-wrap">
            <div className="width-full lg:w-1/2 lg:p-10">
                <div className="flex items-center justify-center">
                    <motion.img 
                        whileInView={{x:0,opacity:1}}
                        initial={{x:-100,opacity:0}}
                        transition={{duration:0.5}}
                        className="rounded-2xl" src={about} />
                </div>
            </div>
            <div className="width-full lg:w-1/2">
                <div className="flex items-center justify-center">
                    <motion.p 
                        whileInView={{x:0,opacity:1}}
                        initial={{x:100,opacity:0}}
                        transition={{duration:0.5}}
                        className="my-2 p-6 max-w-xl">{ABOUT_TEXT}</motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About