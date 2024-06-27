import Image from 'next/image'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'

export const ComboBox = () => {
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
          <Text as='h3'>Closed</Text>
          <Image
            src={'/images/combobox/closed.png'}
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
          <Text as='h3'>Disabled</Text>
          <Image
            src={'/images/combobox/disabled.png'}
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
          <Text as='h3'>Opened</Text>
          <Image
            src={'/images/combobox/focused.png'}
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
          <Text as='h3'>Hover</Text>
          <Image
            src={'/images/combobox/opened.png'}
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
          <Text as='h3'>Error</Text>
          <Image
            src={'/images/combobox/error.png'}
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
          <Text as='h3'>Selected</Text>
          <Image
            src={'/images/combobox/selected.png'}
            alt='image'
            width={500}
            height={500}
          />
        </Stack>
      </Stack>
    </Box>
  )
}
