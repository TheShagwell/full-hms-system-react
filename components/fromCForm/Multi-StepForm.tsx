"use client"

import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { toast } from '@/components/ui/use-toast'
import { Calendar as CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

// Zod Schemas
const WalkThroughSchema = z.object({
  registrationType: z.enum(['Normal Registration', 'Medical Legal Case', 'Emergency'], {
    required_error: 'Registration type is required',
  }),
  tagPatient: z.enum(['VIP', 'Patient'], {
    required_error: 'Patient tag is required',
  }),
  reasonForVisit: z.enum(['Pick up drugs', 'See a doctor'], {
    required_error: 'Reason for visit is required',
  }),
})

const BasicInformationSchema = z.object({
  title: z.enum(['Miss', 'Mr', 'Mrs'], {
    required_error: 'Title is required',
  }),
  fullName: z.string().min(2, 'Full name is required'),
  profession: z.enum(['Backend', 'Trader'], {
    required_error: 'Profession is required',
  }),
  mobileNumber: z.string().regex(/^\+?[0-9]{10,14}$/, 'Invalid mobile number'),
  email: z.string().email('Invalid email address'),
  dateOfBirth: z.date(),
  maritalStatus: z.enum(['Single', 'Married'], {
    required_error: 'Marital status is required',
  }),
  gender: z.enum(['Male', 'Female'], {
    required_error: 'Gender is required',
  }),
  individualCategory: z.enum(['Teen', 'Adult', 'Aged'], {
    required_error: 'Individual category is required',
  }),
  bloodGroup: z.enum(['O+', 'B+'], {
    required_error: 'Blood group is required',
  }),
  genotype: z.enum(['AA', 'AS'], {
    required_error: 'Genotype is required',
  }),
})

const ContactInformationSchema = z.object({
  nationalIdNumber: z.string().regex(/^[A-Za-z0-9]{10,20}$/, 'Invalid National ID Number'),
  trackingId: z.string().regex(/^[A-Za-z0-9]{8,12}$/, 'Invalid Tracking ID'),
  homeAddress: z.string().optional(),
  city: z.string().optional(),
  nextOfKinFullName: z.string().min(2, 'Next of Kin Full Name is required'),
  nextOfKinMobileNumber: z.string().regex(/^\+?[0-9]{10,14}$/, 'Invalid mobile number'),
  nextOfKinProfession: z.enum(['Backend', 'Trader']).optional(),
  nextOfKinRelationship: z.enum(['Brother', 'Sister', 'Father'], {
    required_error: 'Next of Kin Relationship is required',
  }),
  nextOfKinAddress: z.string().optional(),
  region: z.string().optional(),
  country: z.enum(['Nigeria'], {
    required_error: 'Country is required',
  }),
  religion: z.enum(['Christian', 'Muslims'], {
    required_error: 'Religion is required',
  }),
  state: z.enum(['Lagos'], {
    required_error: 'State is required',
  }),
})

const VisitingInformationSchema = z.object({
  consultationDate: z.date(),
  consultationFee: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Invalid amount'),
  consultationTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  consultationComplaints: z.string().optional(),
  consultationRemarks: z.string().optional(),
  visitingDepartment: z.enum(['GOPD', 'Dentist'], {
    required_error: 'Visiting Department is required',
  }),
  consultationType: z.enum(['General Consultation'], {
    required_error: 'Consultation Type is required',
  }),
  referredBy: z.enum(['Dr. Sarah']).optional(),
  visitingType: z.enum(['First Time Visit'], {
    required_error: 'Visiting Type is required',
  }),
  consultingDoctor: z.enum(['Dr. Gerald', 'Dr. Abraham'], {
    required_error: 'Consulting Doctor is required',
  }),
  transferredFrom: z.enum(['Hospital A', 'Hospital B']).optional(),
})

const CommunicationModeSchema = z.object({
  sms: z.boolean(),
  push: z.boolean(),
})

const CompleteRegistrationSchema = z.object({
  walkThrough: WalkThroughSchema,
  basicInformation: BasicInformationSchema,
  contactInformation: ContactInformationSchema,
  visitingInformation: VisitingInformationSchema,
  communicationMode: CommunicationModeSchema,
})

export default function PatientRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)

  const walkThroughForm = useForm<z.infer<typeof WalkThroughSchema>>({
    resolver: zodResolver(WalkThroughSchema),
    defaultValues: {
      registrationType: undefined,
      tagPatient: undefined,
      reasonForVisit: undefined,
    }
  })

  const basicInformationForm = useForm<z.infer<typeof BasicInformationSchema>>({
    resolver: zodResolver(BasicInformationSchema),
    defaultValues: {
      title: undefined,
      fullName: '',
      profession: undefined,
      mobileNumber: '',
      email: '',
      dateOfBirth: undefined,
      maritalStatus: undefined,
      gender: undefined,
      individualCategory: undefined,
      bloodGroup: undefined,
      genotype: undefined,
    }
  })

  const contactInformationForm = useForm<z.infer<typeof ContactInformationSchema>>({
    resolver: zodResolver(ContactInformationSchema),
    defaultValues: {
      nationalIdNumber: '',
      trackingId: '',
      homeAddress: '',
      city: '',
      nextOfKinFullName: '',
      nextOfKinMobileNumber: '',
      nextOfKinProfession: undefined,
      nextOfKinRelationship: undefined,
      nextOfKinAddress: '',
      region: '',
      country: undefined,
      religion: undefined,
      state: undefined,
    }
  })

  const visitingInformationForm = useForm<z.infer<typeof VisitingInformationSchema>>({
    resolver: zodResolver(VisitingInformationSchema),
    defaultValues: {
      consultationDate: undefined,
      consultationFee: '',
      consultationTime: '',
      consultationComplaints: '',
      consultationRemarks: '',
      visitingDepartment: undefined,
      consultationType: undefined,
      referredBy: undefined,
      visitingType: undefined,
      consultingDoctor: undefined,
      transferredFrom: undefined,
    }
  })

  const communicationModeForm = useForm<z.infer<typeof CommunicationModeSchema>>({
    resolver: zodResolver(CommunicationModeSchema),
    defaultValues: {
      sms: false,
      push: false,
    }
  })

  const onSubmit = (data: z.infer<typeof CompleteRegistrationSchema>) => {
    // Submit to database logic here
    toast({
      title: "Registration Successful",
      description: "Patient details have been saved.",
    })
  }

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <Form {...walkThroughForm}>
            <form onSubmit={walkThroughForm.handleSubmit(() => setCurrentStep(2))} className="space-y-4">
              {/* Implement Stepper 1 fields */}
              <Button type="submit">Next</Button>
            </form>
          </Form>
        )
      case 2:
        return (
          <Form {...basicInformationForm}>
            <form onSubmit={basicInformationForm.handleSubmit(() => setCurrentStep(3))} className="space-y-4">
              {/* Implement Stepper 2 fields */}
              <div className="flex justify-between">
                <Button type="button" onClick={() => setCurrentStep(1)}>Previous</Button>
                <Button type="submit">Next</Button>
              </div>
            </form>
          </Form>
        )
      // Add remaining steps similarly
      case 7:
        return (
          <div>
            <h2>Confirmation</h2>
            {/* Display summary of previous steps */}
            <Button onClick={onSubmit}>Submit</Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex space-x-2 mb-6">
        {[1, 2, 3, 4, 5, 6, 7].map((step) => (
          <div 
            key={step} 
            className={`h-2 flex-1 ${currentStep >= step ? 'bg-primary' : 'bg-muted'}`}
          />
        ))}
      </div>
      {renderStepContent()}
    </div>
  )
}