import DashboardTopNav from '@/components/shared/DashboardTopNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='flex min-h-screen flex-col w-full bg-white lg:flex-row'>
        <Sidebar/>
        <div className="mt-16 px-4 flex-1 border-solid border-l-pink-500 border-2 overflow-auto lg:mt-0 py-6 lg:max-h-screen">
            <div className="mb-8">
                <DashboardTopNav/>
            </div>
            {children}
        </div>
    </main>
  )
}