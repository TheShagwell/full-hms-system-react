import React from 'react'
import { CalendarDate } from './CalendarDate'
import Notifications from './Notifications'
import ProfileNavHeader from './ProfileNavHeader'

type Props = {}

export default function DashboardTopNav({}: Props) {
  return (
    <div className='flex justify-end py-3 items-center gap-3 rounded-full'>
      <CalendarDate/>
      <Notifications/>
      <ProfileNavHeader/>
    </div>
  )
}