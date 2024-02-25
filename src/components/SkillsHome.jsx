"use client"
import { useState } from 'react';

import pythonWhite from '../../public/images/python_white.png'
import pythonColor from '../../public/images/python_color.png'
import djangoColor from '../../public/images/django_color.png'
import djangoWhite from '../../public/images/django_white.png'
import jsColor from '../../public/images/js_color.png'
import jsWhite from '../../public/images/js_white.png'
import cppColor from '../../public/images/c++.png'
import cppWhite from '../../public/images/c++_white.png'
import pgsql from '../../public/images/pgsql.png'
import pgsqlWhite from '../../public/images/pgsql_white.png'
import nodejs from '../../public/images/nodejs.png'
import nodejsWhite from '../../public/images/nodejs_white.png'
import Image from 'next/image';

const SkillsHome = () => {
  const [isHovered1,setIsHovered1] = useState(false)
  const [isHovered2,setIsHovered2] = useState(false)
  const [isHovered3,setIsHovered3] = useState(false)
  const [isHovered4,setIsHovered4] = useState(false)
  const [isHovered5,setIsHovered5] = useState(false)
  const [isHovered6,setIsHovered6] = useState(false)
  return (
    <>
      <div className='absolute left-[10%] max-[700px]:hidden z-10'>
        <div className="">  
          <Image alt='python' className='bg-gradient-to-t from-[#262b32] to-[#0a1328] p-3 rounded-sm hover:bg-slate-600' width={70} height={70} 
          src={isHovered1 ? pythonColor : pythonWhite} // Use conditional logic for src
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          />
        </div>
        <div className="ml-20 mt-28">
          <Image alt='javascript' className='bg-gradient-to-t from-[#191d24] to-[#040e28 p-3 rounded-sm' width={70} height={70}
           src={isHovered2 ? jsColor : jsWhite} // Use conditional logic for src
           onMouseEnter={() => setIsHovered2(true)}  
           onMouseLeave={() => setIsHovered2(false)}
           />
        </div>
        <div className="mt-28">
          <Image alt='cpp' className='bg-gradient-to-t from-[#262b32] to-[#0a1328]  p-3 rounded-sm' width={80} height={80} 
          src={isHovered3 ? cppColor : cppWhite} // Use conditional logic for src     
          onMouseEnter={() => setIsHovered3(true)}  
          onMouseLeave={() => setIsHovered3(false)}
          />
        </div>
        {/* <div className="ml-20 mt-10">
          <Image className='bg-gradient-to-t from-[#191d24] to-[#040e28] p-3 rounded-sm' width={70} height={70} src={pythonWhite} />
        </div> */}
      </div>
      <div className='absolute right-[10%] max-[700px]:hidden z-10 '>
        <div className="ml-20 ">
          <Image className='bg-gradient-to-t from-[#262b32] to-[#0a1328] p-3 rounded-sm' width={70} height={70} alt='django'
          src={isHovered4 ? djangoColor : djangoWhite} // Use conditional logic for src
          onMouseEnter={() => setIsHovered4(true)}  
          onMouseLeave={() => setIsHovered4(false)}
          />
        </div>
        <div className="mt-28">
          <Image className='bg-gradient-to-t from-[#191d24] to-[#040e28] p-3 rounded-sm' width={70} height={70} alt='postgresql'
          src={isHovered5 ? pgsql : pgsqlWhite} // Use conditional logic for src
          onMouseEnter={() => setIsHovered5(true)}  
          onMouseLeave={() => setIsHovered5(false)}
          />
        </div>
        <div className="ml-20 mt-28">
          <Image className='bg-gradient-to-t from-[#262b32] to-[#0a1328] p-3 rounded-sm' width={70} height={70} alt='nodejs'
          src={isHovered6 ? nodejs : nodejsWhite} // Use conditional logic for src
          onMouseEnter={() => setIsHovered6(true)}  
          onMouseLeave={() => setIsHovered6(false)}
          />
        </div>
      </div>
    </>
  );
};

export default SkillsHome;
