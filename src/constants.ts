// import { HomeIcon, ListIcon } from './icons'

export const SIDE_BAR_ITEMS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Patterns',
    href: '/patterns',
  },
  {
    name: 'Elements',
    prefix: 'elements',
    href: '/Elements',
    icon: () => {},
    alt: 'Components Icon',
    children: [
      { name: 'Border radius', href: '/elements/border-radius' },
      { name: 'Colors', href: '/elements/colors' },
      { name: 'Spacing', href: '/elements/spacing' },
      { name: 'Typography', href: '/elements/typography' },
      { name: 'Grid', href: '/elements/grid' },
      { name: 'Flex', href: '/elements/flex' },
      { name: 'Stack', href: '/elements/stack' },
    ],
  },
  {
    name: 'Components',
    prefix: 'components',
    href: '/components',
    children: [
      { name: 'Badge', href: '/components/badge' },
      { name: 'Button', href: '/components/button' },
      { name: 'Callout', href: '/components/callout' },
      { name: 'Card', href: '/components/card' },
      { name: 'Combo box', href: '/components/combo-box' },
      { name: 'Heading', href: '/components/heading' },
      { name: 'Help text', href: '/components/help-text' },
      { name: 'List', href: '/components/list' },
      { name: 'Paragraph', href: '/components/paragraph' },
      { name: 'Radio Button', href: '/components/radio-button' },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'Text area', href: '/components/text-area' },
      { name: 'Text input', href: '/components/text-input' },
    ],
  },
]
