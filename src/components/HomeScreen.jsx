import SkillsHome from './SkillsHome'
import ParticleFly from './ParticleFly';
import { Dancing_Script } from 'next/font/google'
import SocialTags from './SocialTags';

const font = Dancing_Script({ subsets: ['latin'] })

export default function HomeScreen() {
  return (
      <div
      className='bg-transparent flex h-[103vh] justify-center items-center text-slate-300 z-50 
      bg-[url("../../public/images/man-in-black.png")]
      bg-no-repeat bg-center'>
        <div className='p-3'>
          <div className={font.className}>
            <p className='text-2xl italic font-thin text-yellow-500'>Hello World ,</p>
          </div>
          <h1 className='font-mono text-5xl py-5'><span className={`${font.className}`}>It's</span><span className='text-7xl'> Prabin Sharma</span></h1>
          <h2 className='font-mono text-center text-3xl text-yellow-500 mt-4'>Software Developer</h2>
          <div className='text-center mt-24'>
            <SocialTags flex={"row"}/>
          </div>
        </div>
        {/* <ParticleFly/>     */}
        <SkillsHome/>
      </div>
  )
}
