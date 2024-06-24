'use client'

import { classNames } from '@/utils/class-names'
import Link from 'next/link'
import type React from 'react'

export const SideBarItem = ({
  href,
  children,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
}) => {
  return (
    <Link
      className={classNames(
        isActive ? 'bg-gray-200' : 'hover:bg-gray-200',
        'block rounded-md py-2 pl-10 pr-2 text-sm font-semibold leading-6 text-gray-700'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
