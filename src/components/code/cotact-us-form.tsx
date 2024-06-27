import { Card } from '@/components/card/card'
import { Stack } from '@/components/stack/stack'
import { Flex } from '@/components/flex/flex'
import { Text } from '@/components/text/text'
import { TextInput } from '@/components/text-input/text-input'
import { Box } from '../box/box'
import { XLogoIcon } from '@/iconst'
import { TextArea } from '../text-area/text-area'
import { Button } from '../button/button'

export const ContactUsForm = () => {
  return (
    <Card width='100%'>
      <Flex
        justifyContent='between'
        alignItems='center'
      >
        <Flex>
          <XLogoIcon />
        </Flex>
      </Flex>
      <Stack
        as='div'
        spacing='spacing-08'
        orientation='vertical'
      >
        <Flex
          width={'100%'}
          alignItems='center'
          direction='column'
          gapY='spacing-03'
        >
          <Text as='h2'>Contact Us</Text>
          <Text as='h5'>Feel free to ask anything! #AskMeAnything</Text>
        </Flex>
        <Flex
          justifyContent='around'
          alignItems='center'
          direction='row'
        >
          <Flex
            width={'40%'}
            direction='column'
            gapY='spacing-06'
          >
            <Flex
              width={'100%'}
              direction='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              gapY='spacing-03'
            >
              <Text as='h3'>Address</Text>
              <Text as='h5'>
                1355 Market Street, Downtown San Francisco, California, United
                States
              </Text>
            </Flex>
            <Flex
              width={'100%'}
              direction='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              gapY='spacing-03'
            >
              <Text as='h3'>Phones</Text>
              <Text as='h5'>+1 123-456-7890</Text>
              <Text as='h5'>+1 123-456-7890</Text>
            </Flex>
            <Flex
              width={'100%'}
              direction='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              gapY='spacing-03'
            >
              <Text as='h3'>Email</Text>
              <Text as='h5'>xemail@xemail.com</Text>
            </Flex>
          </Flex>
          <Box
            as='div'
            width={2}
            borderColor='border-subtle-00'
            borderSize='border-1'
            height={'100%'}
          >
            <span></span>
          </Box>
          <Flex
            width={'50%'}
            direction='column'
            alignItems='center'
            justifyContent='center'
            gapY='spacing-05'
          >
            <TextInput
              id='name'
              placeholder='Ana'
              label={'Name'}
            />
            <TextInput
              id='email'
              placeholder='email@x.com'
              label={'Email'}
            />
            <TextInput
              id='phone'
              placeholder='123-456-7890'
              label={'Phone'}
            />
            <Box
              as='div'
              width={'100%'}
            >
              <TextArea
                id='text-area'
                label='Message'
                value={''}
                variant='default'
                maxCharacters={1000}
                placeholder={'Type your message here'}
              />
            </Box>
            <Button
              variant='secondary'
              size='large'
              buttonAlign='center'
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  )
}
