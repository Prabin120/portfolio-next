import React, { useEffect, useState } from 'react'
import SocialTags from './SocialTags'
import ProjectSingle from './ProjectSingle';
import getData from './fetchData';

export default function Projects() {
  const [projects,setProjects] = useState(null)
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await getData("personal-projects");
      setProjects(response)
    };
    fetchData();
  },[])
  
  return (
    <div className={`min-h-screen p-4 bg-gradient-to-t from-[#191d24] to-[#040e28] text-slate-300 relative pt-10`}>
        <h2 className={`text-center text-5xl font-mono max-[700px]:text-3xl`}>Personal <span className='text-yellow-500 font-bold'>Projects</span></h2>

        <div className={`mt-10 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 `}>
        {projects && projects.map((element, index) => (
           <ProjectSingle element={element} key={index}/>
        ))}
        </div>

        <div className='fixed right-5 top-1/3'>
            <SocialTags flex={"col"}/>  
        </div>
    </div>
  )
}
