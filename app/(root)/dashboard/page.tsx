"use client"

import { CalendarDate } from '@/components/shared/CalendarDate'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='bg-white'>
      <CalendarDate/>
    </div>
  )
}