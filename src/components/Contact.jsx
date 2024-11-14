import React, { useState } from 'react'
import { CONTACT } from '../cosntants'
import { motion } from "framer-motion"
import './animate.css'
import Swal from 'sweetalert2'
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state,setState]=useState(false)
  const [result, setResult] = React.useState("");
  const handleState=()=>{
    setState(!state)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4c988390-6f04-4e28-aaf0-6cf2d5f8977c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      handleState()
      Swal.fire({
        title:"success!!",
        text:"Email sent succesfully",
        icon:"success"
      })
      event.target.reset();
    } else {
      Swal.fire({
        title:"OOPSS!!",
        text:data.message,
        icon:"error"
      })
      setResult(data.message);
    }
  };
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='text-center text-4xl my-20' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>
            Contact Me
        </h2>
        <div className=' text-center tracking-tighter'>
            <motion.p initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='my-4'>{CONTACT.address}</motion.p>
            <motion.p initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='my-4'><a href={`tel:${CONTACT.phoneNo}`} className='border-b text-cyan-900'>{CONTACT.phoneNo}</a></motion.p>
            <a href={`mailto:${CONTACT.email}`} className='border-b text-cyan-900'>{CONTACT.email}</a>
        </div>
        <div className='text-center m-5'>
            <button className='hover btn text-neutral-300 my-3 px-3 py-2 bg-neutral-900 rounded-xl' style={{ fontFamily: 'Sour Gummy, sans-serif' }} onClick={handleState}>click here to write to me</button>
            {state &&(
              <div className='animate-slide-down'>
                <form onSubmit={handleSubmit}>
                  <div className=' '>
                    <label htmlFor='name' hidden>Name</label>
                    <input type='text' name='name' id="name" placeholder='name' onChange={(e) => setName(e.target.value)} required className='m-7 rounded-xl p-2 bg-neutral-300 w-[400px] text-black'></input>
                  </div>
                  <div className=''>
                    <label htmlFor='Email' hidden>Email</label>
                    <input type='email' name='Email' id="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required className='mx-7 rounded-xl p-2 bg-neutral-300 w-[400px] text-black'></input>
                  </div>
                  <div className=''>
                    <label htmlFor='message' hidden>message</label>
                    <textarea type='text' name='message' id="message" placeholder='message' onChange={(e) => setMessage(e.target.value)}required className='m-7 rounded-xl p-2 bg-neutral-300 w-[400px] h-[150px] text-black'></textarea>
                  </div>
                  <input className='hover btn bg-red-700 w-[100px] rounded-xl text-black p-2' type="submit" value="submit" style={{ fontFamily: 'Sour Gummy, sans-serif' }}/>
                </form>
              </div>
            )}
        </div>
    </div>
  )
}

export default Contact