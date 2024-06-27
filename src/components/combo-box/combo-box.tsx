import Image from 'next/image'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import { Flex } from '@/components/flex/flex'

export const ComboBox = () => {
  return (
    <Box
      as='div'
      padding='spacing-04'
    >
      <Flex
        direction='row'
        width={'100%'}
        as='div'
      >
        <Flex
          direction='column'
          gapY='spacing-04'
          width={'50%'}
          as='div'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Closed</Text>
            <Image
              src={'/images/combobox/closed.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Disabled</Text>
            <Image
              src={'/images/combobox/disabled.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Opened</Text>
            <Image
              src={'/images/combobox/focused.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
        </Flex>
        <Flex
          direction='column'
          gapY='spacing-04'
          width={'50%'}
          as='div'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Hover</Text>
            <Image
              src={'/images/combobox/opened.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Error</Text>
            <Image
              src={'/images/combobox/error.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Selected</Text>
            <Image
              src={'/images/combobox/selected.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
