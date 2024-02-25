'use client'
import Link from 'next/link'
import { SlCalender } from 'react-icons/sl'
import styles from '../../public/css/transition.module.css'
import { useInView } from 'react-intersection-observer'

export default function ProjectSingle({element}) {
    const { ref: ref, inView: isVisible } = useInView();
  return (
    <div ref={ref} className={`${!isVisible?'invisible':''} ${isVisible?styles.zoomin:''} bg-gradient-to-t from-[#252931] to-[#101a34] p-5 rounded-lg`}>
        <small className='font-bold text-sm max-[700px]:text-xs'><SlCalender className='inline mr-2 text-sm align-text-top text-yellow-300'/> {element.duration}</small>
        <h3 className='text-3xl mb-2 mt-4 hover:text-yellow-400 max-[700px]:text-xl'>{element.title}</h3>
        <p className='text-slate-400 text-xl'>{element.overview}</p>
        <div className='text-slate-400 mt-3'>
          {element.workDetail.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </div>
        { element.projectLink &&
          <div className='mt-6'>
            <Link className='bg-slate-500 py-2 px-3 rounded-sm hover:bg-yellow-600 ' href={element.projectLink}>GitHub</Link>
        </div>
        }
    </div>
  )
}
