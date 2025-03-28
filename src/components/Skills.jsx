'use client'
import React, { useEffect, useState } from 'react'
import SkillSingle from './SkillSingle'
import SocialTags from './SocialTags'
import skills from '../../public/data/skills'
export default function Skills() {
  const [data,setData] = useState(null)
  useEffect(()=>{
    setData(skills);
  },[])
  return (
    <div className={`min-h-screen p-4 bg-gradient-to-t from-[#191d24] to-[#040e28] text-slate-300 relative pb-10 pt-24    `}>
        <h2 className={`text-center text-5xl font-mono max-[700px]:text-3xl`}>Skill <span className='text-yellow-500 font-bold'>Set</span></h2>
        <div className="max-w-7xl m-auto mt-16">
          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-3 pr-6 pb-1 border-b-2 border-yellow-500'>Programing Languages</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data.filter(skill => skill.skillType === 'Programming Languages').map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }
          </div>

          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-6 pr-6 pb-1 border-b-2 border-yellow-500'>Frameworks</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data.filter(skill => skill.skillType === 'Frameworks').map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }

          </div>
          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-6 pr-6 pb-1 border-b-2 border-yellow-500'>Database</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data.filter(skill => skill.skillType === 'Database').map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }
          </div>
          
          
          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-6 pr-6 pb-1 border-b-2 border-yellow-500'>Others</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data.filter(skill => skill.skillType === 'Others').map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }
          </div>

          <h3 className='text-slate-300 text-2xl max-[700px]:text-xl inline-block mt-6 pr-6 pb-1 border-b-2 border-yellow-500'>Soft Skills</h3>
          <div className={`mt-6 mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16 `}>
          {
            data && data.filter(skill => skill.skillType === 'Soft Skills').map((element,index)=>{
              return <SkillSingle key={index} element={element}/>
            })
          }
          </div>
        </div>
    </div>
  )
}
