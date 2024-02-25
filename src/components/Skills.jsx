'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import python from '../../public/images/python_color.png'
// import cpp from '../../public/images/c++.png'
// import js from '../../public/images/js_color.png'
// import django from '../../public/images/django_color.png'
// import drf from '../../public/images/drf.png'
// import bootstrap from '../../public/images/bootstrap.png'
// import jquery from '../../public/images/jquery.png'
// import git from '../../public/images/git.png'
// import postgress from '../../public/images/pgsql.jpeg'
// import dataAnalysis from '../../public/images/data-analysis.png'
// import adaptive from '../../public/images/adapt.png'
// import quickLearner from '../../public/images/quick_learner.png'
// import positive from '../../public/images/positive.png'
// import problemSolving from '../../public/images/problem-solving.png'
import SkillSingle from './SkillSingle'
import SocialTags from './SocialTags'
import getData from './fetchData'

export default function Skills() {
  const [data,setData] = useState(null)
  useEffect(()=>{
    const fetchdata = async ()=>{
        const result = await getData("skills/group");
        setData(result);
    };
    fetchdata();
  },[])
  return (
    <div className={`min-h-screen p-4 bg-gradient-to-t from-[#191d24] to-[#040e28] text-slate-300 relative py-10`}>
        <h2 className={`text-center text-5xl font-mono max-[700px]:text-3xl`}>Skill <span className='text-yellow-500 font-bold'>Set</span></h2>
        <div className="max-w-7xl m-auto mt-16">
          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-3 pr-6 pb-1 border-b-2 border-yellow-500'>Programing Languages</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data["Programming Language"].map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }
          </div>

          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-6 pr-6 pb-1 border-b-2 border-yellow-500'>Frameworks</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data["Frameworks"].map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }

          </div>
          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-6 pr-6 pb-1 border-b-2 border-yellow-500'>Database</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data["Database"].map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }
          </div>

          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-6 pr-6 pb-1 border-b-2 border-yellow-500'>Soft Skills</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data["Soft Skills"].map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }
          </div>

        </div>
        <div className='fixed right-5 top-1/3'>
            <SocialTags flex={"col"}/>  
        </div>
    </div>
  )
}
