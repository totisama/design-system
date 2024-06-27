import { HomeWrapper } from '@/components/home-wrapper'
import { Stack } from '@/components/stack/stack'
import Image from 'next/image'

export default function HomePage() {
  return (
    <HomeWrapper
      title='X Design Framework'
      subtitle='XDF'
    >
      <Stack
        orientation='vertical'
        as='div'
        spacing='spacing-01'
      >
        <Image
          priority
          src={'/images/about.png'}
          alt='image'
          width={1500}
          height={1500}
        />
      </Stack>
    </HomeWrapper>
  )
}
