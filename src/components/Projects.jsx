import { PROJECTS } from "../cosntants"
import { motion } from "framer-motion"

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <h2 className='text-center text-4xl my-20' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>
            Projects
        </h2>
            <div>
            {
                PROJECTS.map((project,index)=>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div initial={{x:-100,opacity:0}}
                                    whileInView={{x:0,opacity:1}}
                                    transition={{duration:1}}
                                    className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded border border-neutral-900"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{x:100,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}{project.link?<a href={project.link?project.link:""} target="_blank" rel="noopener noreferrer" className="text-sm text-red-900 pl-6"> Click here</a>:""}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech,index)=>(
                                <span
                                key={index}
                                className="mr-2 rounded bg-neutral-900 px-2 py-1 rounded text-cyan-900"
                                > 
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))
            }
            </div>
        </div>
  )
}

export default Projects