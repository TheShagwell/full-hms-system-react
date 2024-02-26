import React from 'react'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className='hidden h-screen w-72 p-5 shadow-md shadow-purple-200/50 lg:flex bg-red-100'>
      Sidebar
    </aside>
  )
}