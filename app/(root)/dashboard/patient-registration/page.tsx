"use client"
import PatientCardLink from '@/components/shared/PatientsCardLink'
import React, { useState } from 'react'
import { SearchIcon, UserRoundPlus  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {}

export default function PatientRegistration({}: Props) {
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);

  const handleAddPatientClick = () => {
    setIsAddPatientModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddPatientModalOpen(false);
  };
  return (
    <div className='flex flex-col mt-28 items-center justify-center'>
      <div className="flex flex-col items-center justify-center mb-[3rem]">
        <h1 className='text-[1.5rem] font-medium text-[#141414]'>What are your option for the patient today?</h1>
        <p className='max-w-full tracking-wide font-normal text-sm text-center text-[#474747]'>Tell us the category the patient falls into to continue registration</p>
      </div>
      <div className="flex gap-5">
        <PatientCardLink icon={SearchIcon} title='Add New Appointments' href='' description='Do a seamless health care service from our system and get a percent.'  />        
        <PatientCardLink icon={UserRoundPlus} title='Add New Patient' onClick={handleAddPatientClick} href='' description='Grab the opportunity to use office HMO, NHIS, Youth service.'  />
      </div>

      <Dialog isOpen={isAddPatientModalOpen} onClose={handleCloseModal}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1122px]">
        <DialogHeader>
          <DialogTitle className='text-center text-[1.75rem] font-normal'>What's the patient category</DialogTitle>
          <DialogDescription  className='text-[#474747] text-sm tracking-wide text-center font-aeonik font-normal'>
          Tell us the category the patient falls into to continue registration.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
          <div className="flex gap-5">
              <PatientCardLink icon={UserRoundPlus} title="Corporate" href="/patients/new/walk-in" description="Grab the opportunity to use office HMO, NHIS, Youth service." />
              <PatientCardLink icon={UserRoundPlus} title="Family" href="/patients/new/appointment" description="Get the family account details to use the service with less offer." />
              <PatientCardLink icon={UserRoundPlus} title="Private" href="/patients/search" description="Do a seamless health care service from our system and get a percent." />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    </div>
  )
}