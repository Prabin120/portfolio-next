'use client'
import { useInView } from 'react-intersection-observer'
 
export default function SkillSingle({element}) {
    const { ref: ref, inView: isVisible } = useInView();
  return (
    <div ref={ref} className={`${!isVisible?'invisible':''} flex w-full items-center gap-3`}>
        <img src={`http://127.0.0.1:8000/${element.icon}`} width={12} height={12} alt={element.name} className='w-12 h-12 inline mr-2'/>
        <div className='w-full'>
            <div className="flex justify-between">
                <h2 className='text-xl inline'>{element.name}</h2>
                {
                    element.skillType != "Soft Skills" &&
                <span className='inline-block self-end'>{element.percentage}%</span>
                }
            </div>
            <div className="w-full mt-2">
                <div className="h-[12px] overflow-hidden flex items-center rounded-lg bg-transparent border-y-[2px] border-x-[2px] border-[#556182]">
                    {isVisible != undefined?(   
                        <span className="progress-bar rounded-lg m-[1px] bg-[#a9b6dd]" style={{ width: element.percentage + '%' }}></span>
                    ):
                    <span className="rounded-lg m-[1px] bg-[#a9b6dd]" style={{ width:element.percentage + '%' }}></span>
                    }
                </div>
            </div>
        </div>
        <style jsx>{`
        .progress-bar {
            display: block;
            height: 40%;
            animation: progress-animation 5s ease-in-out forwards;
        }
        @keyframes progress-animation {
            from {  
                width: 0;
            }
            to {
                width: ${toString(element.percentage)}%;
            }
        }
        `}</style>
    </div>

  )
}
