// import { HomeIcon, ListIcon } from './icons'

export const SIDE_BAR_ITEMS = [
  {
    name: 'Home',
    href: '/',
    icon: () => {},
    alt: 'Home Icon',
  },
  {
    name: 'Patterns',
    href: '/patterns',
    icon: () => {},
    alt: 'Patterns Icon',
  },
  {
    name: 'Components',
    href: '/components',
    icon: () => {},
    alt: 'Components Icon',
    children: [
      { name: 'Heading', href: '/components/heading' },
      { name: 'Paragraph', href: '/components/paragraph', code: false },
      { name: 'Stack', href: '/components/stack' },
      { name: 'Flex', href: '/components/flex' },
      { name: 'Button', href: '/components/button' },
      { name: 'Text input', href: '/components/text-input' },
      { name: 'Text area', href: '/components/text-area' },
      { name: 'Help text', href: '/components/help-text' },
      { name: 'Combo box', href: '/components/combo-box', code: false },
      { name: 'Switch', href: '/components/switch' },
      { name: 'List', href: '/components/list' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Tabs', href: '/components/tabs', code: false },
      { name: 'Card', href: '/components/card' },
      { name: 'Callout', href: '/components/callout' },
    ],
  },
]
