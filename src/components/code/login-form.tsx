import { Card } from '@/components/card/card'
import { Stack } from '@/components/stack/stack'
import { Flex } from '@/components/flex/flex'
import { Text } from '@/components/text/text'
import { XIcon, XLogoIcon } from '@/iconst'
import { Button } from '@/components/button/button'
import { TextInput } from '@/components/text-input/text-input'

export const LoginForm = ({ error }: { error?: boolean }) => {
  return (
    <Card
      width='100%'
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
          <Flex
            grow
            justifyContent='center'
          >
            <Text as='h3'>Create an account</Text>
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
          <TextInput
            id='text'
            placeholder='Ana'
            label={'Name'}
            variant={error ? 'error' : 'default'}
            helpText={error ? 'Please enter your first name' : ''}
          />
          <TextInput
            id='text'
            placeholder='@handle'
            label={'Handle'}
            variant={error ? 'error' : 'default'}
            helpText={error ? 'Please enter your handle' : ''}
          />
          <TextInput
            id='text'
            placeholder='*******'
            label={'Password'}
            variant={error ? 'error' : 'default'}
            helpText={error ? 'Please enter your password' : ''}
          />
        </Stack>
        <Button
          variant='secondary'
          size='large'
          buttonAlign='center'
        >
          Create account
        </Button>
      </Stack>
    </Card>
  )
}
