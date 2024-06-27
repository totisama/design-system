import Image from 'next/image'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import { Flex } from '@/components/flex/flex'

export const Grid = () => {
  return (
    <Box
      as='div'
      padding='spacing-04'
      display='flex'
      flexDirection='column'
      gapY='spacing-10'
    >
      <Flex
        width={'100%'}
        justifyContent='center'
        as='div'
      >
        <Image
          src={'/images/grid/grid.png'}
          alt='image'
          width={500}
          height={500}
        />
      </Flex>
      <Flex
        direction='row'
        width={'100%'}
        as='div'
      >
        <Flex
          direction='column'
          gapY='spacing-04'
          width={'33%'}
          as='div'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>One column short</Text>
            <Image
              src={'/images/grid/One column short.png'}
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
            <Text as='h5'>Two columns equal</Text>
            <Image
              src={'/images/grid/Two columns equal.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
        </Flex>
        <Flex
          direction='column'
          gapY='spacing-04'
          width={'33%'}
          as='div'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>One column large</Text>
            <Image
              src={'/images/grid/One column large.png'}
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
            <Text as='h5'>Three columns</Text>
            <Image
              src={'/images/grid/Three columns.png'}
              alt='image'
              width={250}
              height={250}
            />
          </Stack>
        </Flex>
        <Flex
          direction='column'
          gapY='spacing-04'
          width={'33%'}
          as='div'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-03'
          >
            <Text as='h5'>Two columns short / large</Text>
            <Image
              src={'/images/grid/large.png'}
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
            <Text as='h5'>Four columns</Text>
            <Image
              src={'/images/grid/Four columns.png'}
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
