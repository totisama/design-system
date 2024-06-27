import { Text } from '@/components/text/text'

export const Header = () => {
  return (
    <header className='[grid-area:navbar] px-5 bg-text-primary h-14'>
      <div className='w-full h-full flex items-center justify-start'>
        <Text
          as='h2'
          color='text-button'
          size='lg'
          weight='normal'
        >
          XDF
        </Text>
      </div>
    </header>
  )
}
