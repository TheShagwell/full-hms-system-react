"use client"

import { Check } from "lucide-react"

interface Step {
  title: string
  component: React.ComponentType<any>
}

interface StepperProps {
  steps: Step[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="mb-8">
      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isCompleted
                    ? "bg-primary text-primary-foreground"
                    : isCurrent
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span className="mt-2 text-sm font-medium">{step.title}</span>
            </div>
          )
        })}
        
        <div className="absolute top-4 left-0 right-0 h-[2px] -translate-y-1/2 bg-muted -z-10">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}