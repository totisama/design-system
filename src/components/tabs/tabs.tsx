import Image from 'next/image'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'

export const Tabs = () => {
  return (
    <Box
      as='div'
      padding='spacing-04'
    >
      <Stack
        orientation='vertical'
        as='div'
        spacing='spacing-09'
      >
        <Stack
          orientation='vertical'
          as='div'
          spacing='spacing-03'
        >
          <Text as='h3'>Horizontal default</Text>
          <Image
            src={'/images/tabs/Horizontal default.png'}
            alt='image'
            width={1000}
            height={1000}
          />
        </Stack>
        <Stack
          orientation='vertical'
          as='div'
          spacing='spacing-03'
        >
          <Text as='h3'>Horizontal hover</Text>
          <Image
            src={'/images/tabs/Horizontal hover.png'}
            alt='image'
            width={1000}
            height={1000}
          />
        </Stack>
        <Stack
          orientation='vertical'
          as='div'
          spacing='spacing-03'
        >
          <Text as='h3'>Vertical default</Text>
          <Image
            src={'/images/tabs/Vertical default.png'}
            alt='image'
            width={500}
            height={500}
          />
        </Stack>
        <Stack
          orientation='vertical'
          as='div'
          spacing='spacing-03'
        >
          <Text as='h3'>Vertical hover</Text>
          <Image
            src={'/images/tabs/Vertical hover.png'}
            alt='image'
            width={500}
            height={500}
          />
        </Stack>
      </Stack>
    </Box>
  )
}
