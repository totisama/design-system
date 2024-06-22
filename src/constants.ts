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
    children: [{ name: 'Button', href: '/components/button' }],
  },
]
