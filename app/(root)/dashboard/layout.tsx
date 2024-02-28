import DashboardTopNav from '@/components/shared/DashboardTopNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    // <main className='flex min-h-screen w-full bg-white'>
    //     <div>
    //       <Sidebar/>
    //     </div>
    //     <div className="flex-1 overflow-auto border-solid border-l-pink-500 border-2">
    //         <div className="mb-8 flex">
    //             <DashboardTopNav/>
    //         </div>
    //         <div className=''>
    //         {children}

    //         </div>
    //     </div>
    // </main>
      <main className='flex min-h-screen flex-col w-full bg-white lg:flex-row'>
        <Sidebar/>
        <div className="px-4 flex-1 border-solid overflow-auto lg:mt-0 lg:max-h-screen">
          <div className="mb-8 mt-2 justify-start">
              <DashboardTopNav/>
          </div>
          {children}
        </div>
      </main> 
      // <main className='flex min-h-screen flex-col w-full bg-white lg:flex-row'>
      //   <Sidebar/>
      //   <div className="px-4 flex flex-col h-screen overflow-auto border-solid border-l-pink-500 border-2">
      //     <div className="mb-8 justify-start w-full">
      //         <DashboardTopNav/>
      //     </div>
      //     <div className="flex-1 overflow-auto lg:mt-0 lg:max-h-screen">
      //       {children}
      //     </div>
      //   </div>
      // </main>
  )
}