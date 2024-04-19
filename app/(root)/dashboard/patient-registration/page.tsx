"use client"
import PatientCardLink from '@/components/shared/PatientsCardLink'
import React from 'react'
import { SearchIcon, UserRoundPlus  } from 'lucide-react'

type Props = {}

export default function PatientRegistration({}: Props) {
  return (
    <div className='flex flex-col mt-28 items-center justify-center'>
      <div className="flex flex-col items-center justify-center mb-[3rem]">
        <h1 className='text-[1.5rem] font-medium text-[#141414]'>What are your option for the patient today?</h1>
        <p className='max-w-full tracking-wide font-normal text-sm text-center text-[#474747]'>Tell us the category the patient falls into to continue registration</p>
      </div>
      <div className="flex gap-5">
        <PatientCardLink icon={SearchIcon} title='Add New Visit' href='' description='Do a seamless health care service from our system and get a percent.'  />
        <PatientCardLink icon={UserRoundPlus} title='Add New Patient' href='' description='Grab the opportunity to use office HMO, NHIS, Youth service.'  />
      </div>
    </div>
  )
}