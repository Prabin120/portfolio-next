'use client'
import About from '@/components/About'
import HomeScreen from '@/components/HomeScreen'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import { useEffect, useState } from 'react'
import PreLoader from '@/components/PreLoader'

export default function Home() {
  const [preLoader,setPreLoader] = useState(true);

  useEffect(() => {
    // Check localStorage to see if preloader has been shown before
    const preLoaderShown = localStorage.getItem('preLoaderShown');

    if (preLoaderShown) {
      setPreLoader(false); // Set preLoader to false if it has been shown before
    } else {
      // Simulate loading delay with setTimeout
      const timeout = setTimeout(() => {
        setPreLoader(false);
        // Set preLoaderShown in localStorage to indicate preloader has been shown
        localStorage.setItem('preLoaderShown', 'true');
      },2000); // Adjust the duration as needed (in milliseconds)

      // Cleanup function to clear timeout
      return () => clearTimeout(timeout);
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  if(preLoader){
    return (
      <PreLoader/>
    )
  }
  else
  return (
  <main className="">
      <HomeScreen/>
      <About/>
      <Work/>
      <Projects/>
      <Skills/> 
      <Contact/>
    </main>
  )
}
