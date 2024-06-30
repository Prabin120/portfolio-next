'use client';
import { WorkLeft, WorkRight } from "./WorkChain";
import SocialTags from './SocialTags';
import { useInView } from 'react-intersection-observer';
import styles from '../../public/css/transition.module.css';
import { useEffect, useState } from "react";
import experiencesData from "../../public/data/experiences";

export default function Work() {
  const { ref: ref, inView: isVisible } = useInView();
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(experiencesData);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-t from-[#191d24] to-[#040e28] text-slate-300 relative px-5 pb-10 pt-24`}>
      <h2 className={`text-center text-5xl font-mono max-[700px]:text-4xl`}>
        Work <span className='text-yellow-500 font-bold'>Experience</span>
      </h2>
      <div className="relative my-20">
        <span ref={ref} className={`${!isVisible ? "invisible" : ''} ${isVisible ? styles.popup : ""} absolute w-[1px] h-full left-1/2 bg-slate-500 max-[700px]:left-[-3px]`}></span>
        {
          experience.map((element, index) => {
            if (index % 2 === 0) {
              return <WorkLeft element={element} key={index} />;
            } else {
              return <WorkRight element={element} key={index} />;
            }
          })
        }
      </div>
    </div>
  );
}
