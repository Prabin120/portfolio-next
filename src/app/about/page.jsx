import AboutMe from '@/components/About'
import SocialTags from '@/components/SocialTags'

export default function About() {
  return (
    <>
      <AboutMe/>
      <div className='fixed right-5 top-1/3'>
        <SocialTags flex={"col"} />
      </div>
    </>
  )
}
