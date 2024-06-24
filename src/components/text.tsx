import type React from 'react'

type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'

interface TextProps {
  as: TextTags
  children: React.ReactNode
}

const styles: { [key in TextTags]: string } = {
  h1: 'text-7xl font-bold leading-[70px]',
  h2: 'text-3xl font-bold leading-9 tracking-[0.16px]',
  h3: 'text-xl font-bold leading-6',
  h4: 'text-xl font-normal leading-6',
  h5: 'text-base font-bold tracking-[0.16px] leading-5',
  p: 'text-xs font-normal leading-5',
}

export const Text = ({ as, children }: TextProps) => {
  const Tag = as
  const style = styles[as]

  return <Tag className={style}>{children}</Tag>
}
