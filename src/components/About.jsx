'use client'
import Image from 'next/image'
import manInBlack from '../../public/images/prabin_photo.jpg'
import styles from '../../public/css/transition.module.css'
import SocialTags from './SocialTags'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import aboutData from '../../public/data/about'

const About = () => {
    const { ref: myRef, inView: isVisible } = useInView();
    const [about, setAbout] = useState(null)
    useEffect(() => {
        setAbout(aboutData.intro);
    }, []);

    return (
        <div ref={myRef} className={`${!isVisible ? 'invisible' : ''} min-h-screen p-4 pb-10 pt-24 bg-gradient-to-t from-[#191d24] to-[#040e28] text-slate-300 relative`}>
            <h2 className={`${isVisible ? styles.up : ''} text-center text-6xl font-mono max-[700px]:text-5xl`}>About <span className='text-yellow-500 font-bold'>Me</span></h2>
            <div className='mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 p-2'>
                <div className={`${isVisible ? styles.left : ''} col-1`}>
                    <p className='text-xl max-[700px]:text-lg max-[700px]:text-center'>
                        {about}
                    </p>
                </div>
                <div className={`col-span-1 bg-slate-900 max-h-[400px] ${isVisible ? styles.right : ''}`}>
                    <Image className='object-contain' src={manInBlack} priority={false} alt='Prabin Sharma' />
                </div>
            </div>
            <div className={`${isVisible ? styles.down : ''} mx-auto my-8 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 p-2`}>
                <div className='col-span-1 bg-slate-700 rounded-lg p-5'>
                    <h3 className='text-center text-2xl font-bold'>Personal Info</h3>
                    <p className='font-bold mt-5'>Full Name:</p>
                    <p className=''>Prabin Sharma</p>
                    <p className='font-bold mt-5'>Birth Date:</p>
                    <p className=''>15 Jan 1999</p>
                    <p className='font-bold mt-5'>Address:</p>
                    <p className=''>Bangalore, India</p>
                    <p className='font-bold mt-5'>Hobbies:</p>
                    <p className=''>Coding, Exploring</p>

                </div>
                <div className='col-span-1 bg-slate-700 rounded-lg p-5'>
                    <h3 className='text-center text-2xl font-bold'>Education</h3>
                    <div className='mt-5'>
                        <p className='text-xl font-bold'>Master of Computer Application(MCA)</p>
                        <p className=''> <span className='font-light'> --- from</span> North Eastern Hill University</p>
                        <li className='font-light'>Dec 2020 - Aug 2022</li>
                        <li className='font-light'>CGPA - 9.20</li>
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl font-bold'>Bachelore of Science (Mathematics)</p>
                        <p className=''> <span className='font-light'> --- from</span> Gauhati University</p>
                        <li className='font-light'>Aug 2017 - Nov 2021</li>
                        <li className='font-light'>CGPA - 7.00</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;