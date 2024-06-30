import ContactMe from "@/components/Contact"
import SocialTags from "@/components/SocialTags"

export default function Contact() {
  return (
    <>
      <ContactMe/>
      <div className='fixed right-5 top-1/3'>
        <SocialTags flex={"col"} />
      </div>
    </>
  )
}
