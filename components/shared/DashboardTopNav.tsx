import React from 'react'
import { CalendarDate } from './CalendarDate'
import Notifications from './Notifications'
import ProfileNavHeader from './ProfileNavHeader'

type Props = {}

export default function DashboardTopNav({}: Props) {
  return (
    <div className='flex p-3 w-full items-center justify-between rounded-full'>
      <CalendarDate/>
      <Notifications/>
      <ProfileNavHeader/>
    </div>
  )
}