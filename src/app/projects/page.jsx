import PersonalProjects from "@/components/Projects"
import SocialTags from "@/components/SocialTags"

export default function Projects() {
  return (
    <>
      <PersonalProjects/>
      <div className='fixed right-5 top-1/3'>
        <SocialTags flex={"col"} />
      </div>
    </>
  )
}
