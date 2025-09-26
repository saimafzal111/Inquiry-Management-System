import React from 'react'
import { UrgentDeadline } from './UrgentDeadlines'
import { LatestInquiries } from './LatestInquiries'

function DataTables() {
  return (
    <div className='flex p-6 gap-10'>
        <UrgentDeadline />
        <LatestInquiries />
    </div>
  )
}

export default DataTables