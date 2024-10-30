"use client";

import { useState } from "react";
import {
  ContactInfo,
  PersonalInfo,
  VisitInfo,
} from "@/lib/validators/reg.schema";
import { Button } from "../ui/button";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { ContactInfoForm } from "./ContactInfoForm";
import { VisitInfoForm } from "./VisitInfoForm";

interface FormData {
  personalInfo?: PersonalInfo;
  contactInfo?: ContactInfo;
  visitInfo?: VisitInfo;
}

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});

  const steps = [
    "Personal Information",
    "Contact Information",
    "Visit Information",
  ];

  const handleNext = (data: PersonalInfo | ContactInfo | VisitInfo) => {
    const newFormData = { ...formData, ...data };
    setFormData(newFormData);
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    // Here you would typically send the data to an API or perform some action
    console.log("Final Form Data:", formData);
  };

  const StepComponent = () => {
    switch (step) {
      case 0:
        return <PersonalInfoForm onSubmit={handleNext} />;
      case 1:
        return <ContactInfoForm onSubmit={handleNext} />;
      case 2:
        return <VisitInfoForm onSubmit={handleNext} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-1">
        {steps.map((s, idx) => (
          <Button
            key={idx}
            variant={idx <= step ? "default" : "ghost"}
            disabled={idx > step}
          >
            {s}
          </Button>
        ))}
      </div>
      {StepComponent()}
      {step > 0 && <Button onClick={handleBack}>Back</Button>}
      {step < 2 && <Button onClick={() => setStep(step + 1)}>Next</Button>}
      {step === 2 && <Button onClick={handleSubmit}>Submit</Button>}
    </div>
  );
}
