import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import Image from 'next/image'

export const Design = () => {
  return (
    <Box
      as='div'
      padding='spacing-11'
    >
      <Stack
        orientation='vertical'
        as='div'
        spacing='spacing-09'
      >
        <Stack
          orientation='vertical'
          as='div'
          spacing='spacing-05'
        >
          <Text as='h5'>Welcome to the Job Portal</Text>
          <Image
            src={'/images/Jobposting.png'}
            alt='image'
            width={1000}
            height={1000}
          />
        </Stack>
        <Stack
          orientation='vertical'
          as='div'
          spacing='spacing-05'
        >
          <Text as='h5'>Sign up form</Text>
          <Image
            src={'/images/Signup.png'}
            alt='image'
            width={1000}
            height={1000}
          />
        </Stack>
        <Stack
          orientation='vertical'
          as='div'
          spacing='spacing-05'
        >
          <Text as='h5'>Success page</Text>
          <Image
            src={'/images/Successpage.png'}
            alt='image'
            width={1000}
            height={1000}
          />
        </Stack>
      </Stack>
    </Box>
  )
}
