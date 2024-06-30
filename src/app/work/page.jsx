import SocialTags from '@/components/SocialTags';
import Works from '@/components/Work';

export default function Work() {
  return (
    <>
      <Works/>
      <div className='fixed right-5 top-1/3'>
        <SocialTags flex={"col"} />
      </div>
    </>
  )
}
