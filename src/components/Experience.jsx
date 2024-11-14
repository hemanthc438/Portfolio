import React from 'react'
import { EXPERIENCES } from '../cosntants'
import { motion } from "framer-motion"

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <h2 className='text-center text-4xl my-20' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>
            Experience
        </h2>
        <div>
            {
                EXPERIENCES.map((experience,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <motion.p 
                                initial={{x:-100,opacity:0}}
                                whileInView={{x:0,opacity:1}}
                                transition={{duration:1}}
                                className='mb-2 text-sm text-neutral-400'>
                                {experience.year}
                            </motion.p>
                        </div>
                        <motion.div 
                            initial={{x:100,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{duration:1}}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='font-semibold'>{experience.role}-{" "}
                                <span className='text-sm text-cyan-300'>{experience.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-300'>{experience.description}</p>
                            {experience.technologies.map((tech, index)=>(<span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-cyan-900'>
                                {tech}
                            </span>))}
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Experience