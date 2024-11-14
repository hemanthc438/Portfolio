import { TbBrandReact } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";
import { animate, motion } from "framer-motion"

const iconAnimate = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h2 className="my-20 text-center text-4xl" style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Technologies</h2>
        <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconAnimate(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandReact className="text-7xl text-cyan-900"/>
            </motion.div>
            <motion.div variants={iconAnimate(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNodejs className="text-7xl text-green-900"/>
            </motion.div>
            <motion.div variants={iconAnimate(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandMysql className="text-7xl text-blue-900"/>
            </motion.div>
            <motion.div variants={iconAnimate(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandHtml5 className="text-7xl text-orange-900"/>
            </motion.div>
            <motion.div variants={iconAnimate(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandTailwind className="text-7xl text-cyan-900"/>
            </motion.div>
            <motion.div variants={iconAnimate(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandFirebase className="text-7xl text-orange-900"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies