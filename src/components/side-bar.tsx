'use client'

import { SideBarItem } from '@/components/side-bar-item'
import { SIDE_BAR_ITEMS } from '@/constants'
import { classNames } from '@/utils/class-names'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { Text } from '@/components/text'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <aside className='[grid-area:aside] flex grow flex-col gap-y-3 overflow-y-auto bg-background-hover'>
      <div className='flex mt-3 shrink-0 items-center'>
        <Text as='h2'>XDF</Text>
      </div>
      <nav className='flex flex-1 flex-col'>
        <ul
          role='list'
          className='-mx-2 space-y-1'
        >
          {SIDE_BAR_ITEMS.map((item) => {
            const isActive = pathname === item.href

            return (
              <li key={item.name}>
                {!item.children ? (
                  <SideBarItem
                    isActive={isActive}
                    href={item.href}
                  >
                    {item.name}
                  </SideBarItem>
                ) : (
                  <Disclosure
                    as='div'
                    defaultOpen={pathname.includes('components')}
                  >
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={classNames(
                            isActive
                              ? 'bg-[#8d8d8d33]'
                              : 'hover:bg-[#8d8d8d33]',
                            'flex w-full items-center gap-x-3 p-2 text-left text-sm font-semibold leading-6 text-gray-700'
                          )}
                        >
                          <ChevronRightIcon
                            className={classNames(
                              open
                                ? 'rotate-90 text-[#525252]'
                                : 'text-[#161616]',
                              'h-5 w-5 shrink-0'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </DisclosureButton>
                        <DisclosurePanel
                          as='ul'
                          className='mt-1 px-2'
                        >
                          {item.children.map((subItem) => (
                            <li key={subItem.name}>
                              <SideBarItem
                                isActive={pathname === subItem.href}
                                href={subItem.href}
                              >
                                {subItem.name}
                              </SideBarItem>
                            </li>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
