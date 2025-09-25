import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Separator } from './ui/separator'

function Navbar() {
  return (
    <div className='flex h-5 items-center space-x-4 text-sm mt-3'>
      <SidebarTrigger />
      <Separator orientation='vertical' className='h-6 w-6' />
      <span className='text-[18px] font-bold'>Dashboard</span>
    </div>
  )
}

export default Navbar