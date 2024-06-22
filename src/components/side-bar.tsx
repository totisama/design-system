'use client'

import { SideBarItem } from '@/components/side-bar-item'
import { SIDE_BAR_ITEMS } from '@/constants'
import { classNames } from '@/utils/classNames'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <aside className='[grid-area:aside] flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6'>
      <div className='flex h-16 shrink-0 items-center'>
        {/* <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        /> */}
        <h2 className='text-xl font-semibold'>Design System</h2>
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
                  <Disclosure as='div'>
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={classNames(
                            isActive ? 'bg-gray-200' : 'hover:bg-gray-200',
                            'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700'
                          )}
                        >
                          <ChevronRightIcon
                            className={classNames(
                              open
                                ? 'rotate-90 text-gray-500'
                                : 'text-gray-400',
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
