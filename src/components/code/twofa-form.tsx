import { Card } from '@/components/card/card'
import { Stack } from '@/components/stack/stack'
import { Flex } from '@/components/flex/flex'
import { Text } from '@/components/text/text'
import { XIcon, XLogoIcon } from '@/iconst'
import { Button } from '@/components/button/button'
import { TextInput } from '@/components/text-input/text-input'

export const TWOFAForm = () => {
  return (
    <Card
      width='50%'
      backgroundColor='background'
    >
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-08'
      >
        <Flex
          justifyContent='between'
          alignItems='center'
        >
          <Flex>
            <XLogoIcon />
          </Flex>
          <Flex>
            <XIcon />
          </Flex>
        </Flex>
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-05'
        >
          <Stack
            as='div'
            spacing='spacing-04'
            orientation='vertical'
          >
            <Text as='h3'>
              Enable Two-Factor Authentication to have an extra layer of
              security.
            </Text>
            <Text as='h5'>
              Stay secure and keep enjoying everything X has to offer.
            </Text>
          </Stack>
          <TextInput
            id='text'
            placeholder='1234'
            label={'2FA Code'}
          />
        </Stack>
        <Button
          variant='secondary'
          size='large'
          buttonAlign='center'
        >
          Submit
        </Button>
      </Stack>
    </Card>
  )
}
