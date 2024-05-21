'use client'
import Link from 'next/link';
import { useState } from 'react';
import { RiMenuFoldLine } from "react-icons/ri";
import { GiCrossedSwords } from "react-icons/gi";
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import logo from "../../public/logo/prabin-logo-good.png"


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = usePathname();

  function is_link_starts(add){
    return router.startsWith("/"+add)?true :false
  }
  return (
    <nav className='z-50 relative text-slate-300 flex justify-center'> 
        {/* <ul className='flex flex-col p-6 sticky top-0 justify-center md:flex-row'> */}
        <ul className='flex p-6 w-screen fixed self-center top-0 justify-center bg-slate-900 bg-opacity-80 max-[700px]:hidden'>
            <Link href="/">
              <li className="font-mono px-8 hover:text-yellow-400">
                  Home
              </li>
            </Link>  
            <Link href="/about">
            <li className={`font-mono px-8 hover:text-yellow-400 ${is_link_starts('about') ? 'text-yellow-400':''} `}>
                About
            </li>
            </Link>

            <Link href="/work" onClick={()=>setNavbar(!navbar)}>
              <li className={`font-mono px-8 hover:text-yellow-400 ${is_link_starts('work') ? 'text-yellow-400':''} `}>Work</li>
            </Link>

            <Link href="/projects" onClick={()=>setNavbar(!navbar)}>
              <li className={`font-mono px-8 hover:text-yellow-400 ${is_link_starts('projects') ? 'text-yellow-400':''} `}>Projects</li>
            </Link>

            <Link href="/skills" onClick={()=>setNavbar(!navbar)}>
              <li className={`font-mono px-8 hover:text-yellow-400 ${is_link_starts('skills') ? 'text-yellow-400':''} `}>Skills</li>
            </Link>

            <Link href="/contact" onClick={()=>setNavbar(!navbar)}>
            <li className={`font-mono px-8 hover:text-yellow-400 ${is_link_starts('contact') ? 'text-yellow-400':''} `}>Contact</li>
            </Link>

            <Link href="/resume" onClick={()=>setNavbar(!navbar)}>
            <li className={`font-mono px-8 hover:text-yellow-400 ${is_link_starts('resume') ? 'text-yellow-400':''} `}>Resume</li>
            </Link>
        </ul>
        <ul className='p-5 fixed top-0 min-[700px]:hidden w-screen bg-slate-900 bg-opacity-95'>
            <div className=' flex justify-between items-center '>
                <Link onClick={()=>setNavbar(false)} href="/">
                  <Image src={logo} width={50} height={50} alt='Prabin-logo'></Image>
                </Link>
                <button onClick={()=>setNavbar(!navbar)}>
                    {
                      navbar?(
                        <GiCrossedSwords className="text-white w-6 h-6 hover:text-yellow-400"/>
                        )
                        :(
                        <RiMenuFoldLine className="text-white w-6 h-6 hover:text-yellow-400"/>
                      )
                    }
                </button>

            </div>
            <div className={`${navbar ?'block' : 'hidden'} bg-transparent h-[85vh] z-50 p-4 mt-10 `}>
              <Link href="/" onClick={()=>setNavbar(!navbar)}>
                <li className="font-mono text-xl border-b-2 border-slate-400 text-center py-4 hover:text-yellow-400">
                    Home
                </li>
              </Link>  
              <Link href="/about" onClick={()=>setNavbar(!navbar)}>
                <li className={`font-mono text-xl border-b-2 border-slate-400 text-center py-4 hover:text-yellow-400 ${is_link_starts('about') ? 'text-yellow-400':''}`}>
                    About
                </li>
              </Link>     
              <Link href="/work" onClick={()=>setNavbar(!navbar)}>
                <li className={`font-mono text-xl border-b-2 border-slate-400 text-center py-4 hover:text-yellow-400 ${is_link_starts('work') ? 'text-yellow-400':''}`}>Work</li>
              </Link>
              <Link href="/projects" onClick={()=>setNavbar(!navbar)}>
                <li className={`font-mono text-xl border-b-2 border-slate-400 text-center py-4 hover:text-yellow-400 ${is_link_starts('projects') ? 'text-yellow-400':''}`}>Project</li>
              </Link>
              <Link href="/skills" onClick={()=>setNavbar(!navbar)}>
                <li className={`font-mono text-xl border-b-2 border-slate-400 text-center py-4 hover:text-yellow-400 ${is_link_starts('skills') ? 'text-yellow-400':''}`}>Skills</li>
              </Link>
              <Link href="/contact" onClick={()=>setNavbar(!navbar)}>
                <li className={`font-mono text-xl border-b-2 border-slate-400 text-center py-4 hover:text-yellow-400 ${is_link_starts('contact') ? 'text-yellow-400':''}`}>Contact</li>
              </Link>
              <Link href="/resume" onClick={()=>setNavbar(!navbar)}>
                <li className="font-mono text-xl text-center py-4 hover:text-slate-400">Resume</li>
              </Link>
            </div>
        </ul>
    </nav>
  )
}
