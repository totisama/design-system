import Image from 'next/image'
import { Stack } from '../stack/stack'
import { Text } from '../text/text'
import { Flex } from '../flex/flex'
import { Box } from '../box/box'

export const CardImages = () => {
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
            <Text as='h5'>Variant 1</Text>
            <Image
              src={'/images/cards/Variant5.png'}
              alt='image'
              width={300}
              height={300}
            />
          </Stack>

          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Variant 3</Text>
            <Image
              src={'/images/cards/Variant8.png'}
              alt='image'
              width={300}
              height={300}
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
            <Text as='h5'>Variant 2</Text>
            <Image
              src={'/images/cards/Variant7.png'}
              alt='image'
              width={300}
              height={300}
            />
          </Stack>
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Variant 4</Text>
            <Image
              src={'/images/cards/Variant6.png'}
              alt='image'
              width={300}
              height={300}
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
