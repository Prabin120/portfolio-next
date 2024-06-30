'use client'

import HomeScreen from "@/components/HomeScreen";
import PreLoader from "@/components/PreLoader";
import { useEffect, useState } from "react";
import SocialTags from "@/components/SocialTags";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


export default function Home() {
  const [preLoader, setPreLoader] = useState(true);
  const [showSocialTags, setShowSocialTags] = useState(false);

  useEffect(() => {
    const preLoaderShown = localStorage.getItem('preLoaderShown');

    if (preLoaderShown) {
      setPreLoader(false);
    } else {
      const timeout = setTimeout(() => {
        setPreLoader(false);
        localStorage.setItem('preLoaderShown', 'true');
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const homeScreenHeight = document.getElementById('homeScreen').offsetHeight;
      console.log(homeScreenHeight);
      if (window.scrollY > homeScreenHeight) {
        setShowSocialTags(true);
      } else {
        setShowSocialTags(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (preLoader) {
    return <PreLoader />;
  } else {
    return (
      <main className="">
        <div id="homeScreen">
          <HomeScreen />
        </div>
        <About/>
        <Work/>
        <Projects />
        <Skills />
        <Contact/>

        {showSocialTags && (
          <div className="fixed right-5 top-1/3">
            <SocialTags flex={"col"} />
          </div>
        )}
      </main>
    );
  }
}
