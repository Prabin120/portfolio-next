'use client'
import styles from '../../public/css/transition.module.css'
import { useInView } from 'react-intersection-observer'

function WorkLeft({element}) {
  const { ref: left, inView: isVisibleLeft } = useInView();
  return (
    <div ref={left} className={`${!isVisibleLeft? 'invisible':''} mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 `}>
        <div className={`text-right pr-5 relative ${isVisibleLeft? styles.left:''} max-[700px]:text-left max-[700px]:pl-5`}>
          {/* <span className={`absolute w-[1px] py-20 h-full right-[-9px] bg-slate-500 max-[700px]:left-[-2px]`}></span>  */}
            <span className="w-5 h-5 absolute rounded-full bg-yellow-500 right-[-18px] top-1/2 max-[700px]:left-[-13px]"></span>
            <span className="w-3 h-3 absolute rounded-full bg-slate-700 right-[-14px] mt-[4px] top-1/2 max-[700px]:left-[-9px]"></span>
            <h3 className="text-2xl font-bold">{element.title}</h3>
            <p className="text-slate-400 text-lg mt-2">{element.company} | {element.location}</p>
            <p className="bg-yellow-600 inline-block rounded-lg p-2 my-3 text-slate-200">{element.duration}</p>
            <ul className="text-slate-400">
              {
                element.workDetail.map((data,index)=>{
                  return <li className='text-slate-400 py-2' key={index}>{data}</li>
                })
              }
            </ul>
        </div>
    </div>
  )
}

function WorkRight({element}) {
  const { ref: right, inView: isVisibleRight } = useInView();
    return (
      <div ref={right} className={`${!isVisibleRight?'invisible':''} mx-auto my-6 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 `}>
        <div></div>
          <div className={`text-left pl-5 relative ${isVisibleRight? styles.right:''}`}>
            {/* <span className={`absolute w-[1px] py-10 h-full left-[-9px] bg-slate-500 max-[700px]:left-[-2px]`}></span>  */}
              <span className="w-5 h-5 absolute rounded-full bg-yellow-500 left-[-18px] top-1/2 max-[700px]:left-[-13px]"></span>
              <span className="w-3 h-3 absolute rounded-full bg-slate-700 left-[-14px] mt-[4px] top-1/2 max-[700px]:left-[-9px] "></span>
              <h3 className="text-2xl font-bold">{element.title}</h3>
              <p className="text-slate-400 text-lg mt-2">{element.company} | {element.location}</p>
              <p className="bg-yellow-600 inline-block rounded-lg p-2 my-3 text-slate-200">{element.duration}</p>
              <ul className="text-slate-400">
              {
                element.workDetail.map((data,index)=>{
                  return <li className='text-slate-400 py-2' key={index}>{data}</li>
                })
              }
            </ul>
          </div>
      </div>
    )
  }

export {WorkLeft,WorkRight}