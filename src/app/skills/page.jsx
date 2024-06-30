import Skillset from '@/components/Skills';
import SocialTags from '@/components/SocialTags';

export default function Skills() {
  return (
    <>
      <Skillset/>
      <div className='fixed right-5 top-1/3'>
        <SocialTags flex={"col"} />
      </div>
    </>
  )
}
