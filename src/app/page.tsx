import { Box } from '@/components/box/box'
import { HomeWrapper } from '@/components/home-wrapper'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
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
          src={'/images/principles.png'}
          alt='image'
          width={1500}
          height={1500}
        />
        <Image
          src={'/images/tone.png'}
          alt='image'
          width={1500}
          height={1500}
        />
      </Stack>
    </HomeWrapper>
  )
}
