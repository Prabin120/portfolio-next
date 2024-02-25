'use client'
import { useState } from 'react';
import SocialTags from './SocialTags'

export default function Contact() {
  const [submitted,setSubmitted] = useState(false);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const response = await fetch('http://127.0.0.1:8000/contact', {   
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name,email, message }),
    })
    setLoading(false);
    if (response.ok) {
      setSubmitted(true)
    } else {
      setError(true)
    }
  }
  return (
    <div className={`min-h-screen bg-gradient-to-t from-[#191d24] to-[#040e28] text-slate-300 relative px-5 py-10`}>
        <h2 className={`text-center text-5xl font-mono max-[700px]:text-4xl`}>Contact <span className='text-yellow-500 font-bold'>Me</span></h2>
        <div className='bg-slate-700 px-6 py-10 max-w-5xl mx-auto my-10 rounded-lg'>
          <h2 className='text-center text-3xl mb-3'>Reach out through Social Media</h2>
          <div className="my-8">
            <SocialTags flex="row"/>
          </div>
          <div className=" flex justify-around items-center my-8">
            <hr className="inline-block w-2/5" />
            <span>or</span>
            <hr className="inline-block w-2/5" />
          </div>
        {
          ((!submitted) && (!error)) ?
          <form className={`max-w-md mx-auto ${loading? "hidden":""}`} onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <textarea type="text" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required ></textarea>
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write a Message</label>
            </div>
            <div className="">
              <button type="submit" className="w-full p-3 rounded-lg mt-3 text-slate-300  bg-[#040e28]  hover:bg-slate-900 focus:outline-none ">Submit</button>
            </div>
          </form>
          
          :
          error?
          <p className='flex justify-center items-center text-2xl py-4 text-center'>Having some Technical issue. Please try after sometime 😥</p>
          :
          <p className='flex justify-center items-center text-4xl py-4 text-center'>Thank You for your kind response 	&#x1F49D;</p>
        } 

        </div>
    </div>
  )
}
