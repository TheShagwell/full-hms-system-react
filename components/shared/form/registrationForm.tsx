"use client"

import { useState } from "react"
import axios from 'axios';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Card } from "@/components/ui/card"
import { Stepper } from "./stepper"
import { WalkThroughStep } from "./steps/walk-through"
import { BasicInfoStep } from "./steps/basic-info-step"
import { ContactInfoStep } from "./steps/contact-info-step"
import { VisitingInfoStep } from "./steps/visiting-info-step"
import { PhotoDetailsStep } from "./steps/photo-details-step"
import { CommunicationStep } from "./steps/communication-step"
import { ConfirmationStep } from "./steps/confirmation-step"
import { registrationSchema, type RegistrationData } from "@/lib/formValidations/registration"
import { useRouter } from "next/navigation";
// Patient Registration Interface
// export interface PatientRegistration {
//     walkThrough: {
//       registrationType: string
//       tagPatient: string
//       reasonForVisit: string
//     }
//     basicInformation: {
//       title: string
//       fullName: string
//       profession: string
//       mobileNumber: string
//       email: string
//       dateOfBirth: Date
//       maritalStatus: string
//       gender: string
//       individualCategory: string
//       bloodGroup: string
//       genotype: string
//     }
//     contactInformation: {
//       nationalIdNumber: string
//       trackingId: string
//       homeAddress?: string
//       city?: string
//       nextOfKinFullName: string
//       nextOfKinMobileNumber: string
//       nextOfKinProfession?: string
//       nextOfKinRelationship: string
//       nextOfKinAddress?: string
//       region?: string
//       country: string
//       religion: string
//       state: string
//     }
//     visitingInformation: {
//       consultationDate: Date
//       consultationFee: string
//       consultationTime: string
//       consultationComplaints?: string
//       consultationRemarks?: string
//       visitingDepartment: string
//       consultationType: string
//       referredBy?: string
//       visitingType: string
//       consultingDoctor: string
//       transferredFrom?: string
//     }
//     communicationMode: {
//       sms: boolean
//       push: boolean
//     }
//   }

const steps = [
//   { title: "Walk Through", component: WalkThroughStep },
  { title: "Basic Information", component: BasicInfoStep },
  { title: "Contact Information", component: ContactInfoStep },
  { title: "Visiting Information", component: VisitingInfoStep },
//   { title: "Capture Photo Details", component: PhotoDetailsStep },
//   { title: "Communication Mode", component: CommunicationStep },
  { title: "Confirmation", component: ConfirmationStep },
]

export function RegistrationForm() {
    const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0)
  const { toast } = useToast()
  
  const form = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
    //   walkThrough: {
    //     registrationType: "",
    //     tagPatient: "",
    //     reasonForVisit: "",
    //   },
      basicInfo: {
        title: "",
        mrNumber: "",
        fullName: "",
        occupation: "",
        mobileNumber: "",
        additionalNumber: "",
        email: "",
        dateOfBirth: new Date(),
        maritalStatus: "",
        gender: "",
        // individual: "",
        bloodGroup: "",
        genotype: "",
      },
      contactInfo: {
        // nationalIdNumber: "",
        // trackingId: "",
        homeAddress: "",
        city: "",
        nextOfKinName: "",
        nextOfKinPhoneNo: "",
        nextOfKinOccupation: "",
        nextOfKinRelation: "",
        nextOfKinAddress: "",
        region: "",
        countryNationality: "",
        religion: "",
        state: "",
      },
      VisitingInfo: {
        consultationDate: new Date(),
        consultationFee: "",
        consultationTime: "",
        consultationRemarks: "",
        consultationComplaints: "",
        visitingDepartment: "",
        consultationType: "",
        referredBy: "",
        visitingType: "",
        consultingDoctor: "",
        // transferredFrom: "",
      },
    //   PhotoDetailsInfo: {
    //     photo: ""
    //   },
    //   CommunicationInfo: {
    //     sms: "",
    //     push: "",
    //   }


      // ... other default values
    },
  })

  const onSubmit = async (data: RegistrationData) => {
    // try {
    //     const response = await axios.post(
    //         'http://localhost:8080/CareHMS-API/patients', 
    //         data, {
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //         }
    //       );

    //       const d = await response.data;
    //       if(d.status === 200) {
    //         router.push('/dashboard');
    //         toast({
    //           title: "Success!",
    //           description: "Patient registration completed successfully.",
    //         })
    //       } else{
    //         toast({
    //             title: "Error",
    //             description: "Something went wrong. Please try again.",
    //             variant: "destructive",
    //           })
    //       }
    //       console.log(d)
        
    //     //   return response.data;
          
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Something went wrong. Please try again.",
    //     variant: "destructive",
    //   })
    // }
    console.log("function is working");
    console.log(data);
    try {
        // Transform data if necessary
        const payload = {
          ...data
        };
  
        const response = await axios.post(
          "http://localhost:8080/CareHMS-API/patients",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.data.status === 200) {
          toast({
            title: "Success!",
            description: "Patient registration completed successfully.",
          });
          router.push("/dashboard");
        } else {
          throw new Error(response.data.message || "Unexpected error occurred");
        }
      } catch (error: any) {
        console.error("API Error:", error);
        toast({
          title: "Error",
          description: error.response?.data?.message || error.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <Card className="w-full max-w-4xl mx-auto p-6">
      <Stepper steps={steps} currentStep={currentStep} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CurrentStepComponent form={form} />
          
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            
            {currentStep === steps.length - 1 ? (
              <Button type="submit">Submit Registration</Button>
            ) : (
              <Button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              >
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </Card>
  )
}