import Image from 'next/image'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import { Flex } from '@/components/flex/flex'

export const Tabs = () => {
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
          gapY='spacing-08'
          width={'50%'}
          as='div'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Horizontal default</Text>
            <Image
              src={'/images/tabs/Horizontal default.png'}
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
            <Text as='h5'>Vertical default</Text>
            <Image
              src={'/images/tabs/vertical default.png'}
              alt='image'
              width={150}
              height={150}
            />
          </Stack>
        </Flex>
        <Flex
          direction='column'
          gapY='spacing-08'
          width={'50%'}
          as='div'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Horizontal hover</Text>
            <Image
              src={'/images/tabs/Horizontal hover.png'}
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
            <Text as='h5'>Vertical hover</Text>
            <Image
              src={'/images/tabs/vertical hover.png'}
              alt='image'
              width={150}
              height={150}
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
