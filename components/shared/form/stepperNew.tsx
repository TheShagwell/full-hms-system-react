"use client";

import React, { useState } from "react";
import { Stethoscope, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CustomFormField from "@/components/shared/form/CustomFormField";
import { Form } from "@/components/ui/form";
import { FormProvider, useForm } from "react-hook-form";

// Define the type for FormFieldType
export enum FormFieldType {
  INPUT = "INPUT",
  PHONE_INPUT = "PHONE_INPUT",
  DATE_PICKER = "DATE_PICKER",
  CHECKBOX = "CHECKBOX",
  TEXTAREA = "TEXTAREA",
  SELECT = "SELECT",
  SKELETON = "SKELETON",
}

// StepItem Props
interface StepperProps {
  title: string;
  isActive: boolean;
  isCompleted: boolean;
  isLastStep: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  title,
  isActive,
  isCompleted,
  isLastStep,
}) => (
  <div className="flex items-center gap-4">
    <span
      className={`text-sm ${
        isActive || isCompleted
          ? "text-[#232323] font-medium"
          : "text-[#878787]"
      }`}
    >
      {title}
    </span>
    {!isLastStep && (
      <Stethoscope
        className={`w-4 h-4 ${
          isActive || isCompleted ? "text-[#232323]" : "text-[#878787]"
        }`}
      />
    )}
  </div>
);

// Step Content Props
interface StepContentProps {
  step: number;
}

const StepContent: React.FC<StepContentProps> = ({ step }) => {
  const stepTitles = [
    {
      title: "Tell us patient registration mode",
      subtitle: "Give us the information needed to onboard the patient better.",
    },
    {
      title: "Get to know the patient's personal information",
      subtitle: "Provide essential details about the patient.",
    },
    {
      title: "How can we reach you?",
      subtitle: "Provide your contact details for better communication.",
    },
    {
      title: "Tell us about your visit",
      subtitle: "Help us understand the purpose of your visit.",
    },
    {
      title: "Let's capture your photo",
      subtitle: "This helps us identify you during your visit.",
    },
    {
      title: "Choose your preferred communication mode",
      subtitle: "Select how you'd like us to communicate with you.",
    },
    {
      title: "Almost there!",
      subtitle: "Please review your information before final submission.",
    },
  ];

  const currentStep = stepTitles[step];

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Walkthrough</h2>
            <p>
              Welcome to the registration process. Please follow the steps to
              complete your registration.
            </p>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Information</h2>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={Form.control}
              name="name"
              label="Full name"
              placeholder="John Doe"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Visiting Information</h2>
            <div className="space-y-2">
              <Label htmlFor="visitDate">Preferred Visit Date</Label>
              <Input id="visitDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="visitReason">Reason for Visit</Label>
              <Input id="visitReason" placeholder="Enter reason for visit" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Capture Photo</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p>Click to upload or capture photo</p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Communication Mode</h2>
            <div className="space-y-2">
              <Label htmlFor="prefMode">Preferred Communication Mode</Label>
              <Input id="prefMode" placeholder="Select preferred mode" />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Confirmation</h2>
            <p>Please review your information before submitting.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="text-sm text-gray-500">Step {step + 1}/7</div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {currentStep.title}
        </h1>
        <p className="text-lg text-gray-600">{currentStep.subtitle}</p>
      </div>
      {renderStepContent()}
    </div>
  );
};

// Main Component
const RegistrationNav: React.FC = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<number>(0);

  const { control, handleSubmit } = useForm(); // Initialize form methods


  const steps = [
    { id: 0, title: "Walkthrough" },
    { id: 1, title: "Basic Information" },
    { id: 2, title: "Contact Information" },
    { id: 3, title: "Visiting Information" },
    { id: 4, title: "Capture Photo" },
    { id: 5, title: "Communication Mode" },
    { id: 6, title: "Confirmation" },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    router.back();
  };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };

  return (
    <>
      {/* Navigation Header */}
      <div className="border-b py-6">
        <div className="w-full max-w-7xl mx-auto border-b">
          <div className="flex items-center justify-between mb-5">
            <Image
              src="/LogoHMS.svg"
              alt="CareHMS Logo"
              height={40}
              width={168}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          {/* Registration Label */}
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-1 p-[.375rem] mb-5 border rounded-[.375rem]">
              <span className="text-[#424242] text-sm font-semibold">
                PRIVATE REGISTRATION
              </span>
              <span className="text-[#878787] text-sm font-medium">
                LAGOS, NG
              </span>
            </div>
            <nav className="w-full">
              <div className="flex justify-center gap-4 items-center">
                {steps.map((step, index) => (
                  <Stepper
                    key={step.id}
                    title={step.title}
                    isActive={index === activeStep}
                    isCompleted={index < activeStep}
                    isLastStep={index === steps.length - 1}
                  />
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Stepper Content */}
      <FormProvider {...{control}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6 mt-8">
            <StepContent step={activeStep} />
            </div>
            {/* Footer Buttons */}
            <div className="fixed inset-x-0 bottom-0 border-t py-3 bg-[#f9f9f9]">
            <div className="container mx-auto px-4 flex justify-between">
                <Button
                type="button"
                variant="ghost"
                onClick={handlePrevious}
                disabled={activeStep === 0}
                >
                Previous
                </Button>
                {activeStep === steps.length - 1 ? (
                <Button type="submit">Finish</Button>
                ) : (
                <Button type="button" onClick={handleNext}>
                    Next
                </Button>
                )}
            </div>
            </div>
        </form>
      </FormProvider>
    </>
  );
};

export default RegistrationNav;
