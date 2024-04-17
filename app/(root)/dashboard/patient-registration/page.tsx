"use client"
import PatientCardLink from '@/components/shared/PatientsCardLink'
import React from 'react'
import { SearchIcon } from 'lucide-react'

type Props = {}

export default function PatientRegistration({}: Props) {
  return (
    <div className='flex flex-col border border-solid border-red-600 bg-[] items-center justify-center'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-[2rem]'>Tell us the patient detail for today</h1>
        <p className='max-w-[23.125rem] text-center'>Tell us the category the patient falls into to continue registration</p>
      </div>
      <div className="flex gap-5">
        <PatientCardLink icon={SearchIcon} title='Add New Visit' href='' description='Do a seamless health care service from our system and get a percent.'  />
        <PatientCardLink icon={SearchIcon} title='Add New Patient' href='' description='Grab the opportunity to use office HMO, NHIS, Youth service.'  />
      </div>
    </div>
  )
}