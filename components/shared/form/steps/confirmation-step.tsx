"use client"

import { format } from "date-fns"
import { Card } from "@/components/ui/card"

export function ConfirmationStep({ form }) {
  const formValues = form.getValues()

  const sections = [
    {
      title: "Walk Through",
      fields: [
        { label: "Registration Type", value: formValues.walkThrough?.registrationType },
        { label: "Tag Patient", value: formValues.walkThrough?.tagPatient },
        { label: "Reason for Visit", value: formValues.walkThrough?.reasonForVisit },
      ],
    },
    {
      title: "Basic Information",
      fields: [
        { label: "Title", value: formValues.basicInfo?.title },
        { label: "Full Name", value: formValues.basicInfo?.fullName },
        { label: "Profession", value: formValues.basicInfo?.profession },
        { label: "Mobile Number", value: formValues.basicInfo?.mobileNumber },
        { label: "Email", value: formValues.basicInfo?.email },
        {
          label: "Date of Birth",
          value: formValues.basicInfo?.dateOfBirth
            ? format(new Date(formValues.basicInfo.dateOfBirth), "PPP")
            : "",
        },
        { label: "Marital Status", value: formValues.basicInfo?.maritalStatus },
        { label: "Gender", value: formValues.basicInfo?.gender },
        { label: "Individual", value: formValues.basicInfo?.individual },
        { label: "Blood Group", value: formValues.basicInfo?.bloodGroup },
        { label: "Genotype", value: formValues.basicInfo?.genotype },
      ],
    },
    {
      title: "Contact Information",
      fields: [
        { label: "National ID", value: formValues.contactInfo?.nationalIdNumber },
        { label: "Tracking ID", value: formValues.contactInfo?.trackingId },
        { label: "Home Address", value: formValues.contactInfo?.homeAddress },
        { label: "City", value: formValues.contactInfo?.city },
        { label: "State", value: formValues.contactInfo?.state },
        { label: "Country", value: formValues.contactInfo?.country },
        { label: "Religion", value: formValues.contactInfo?.religion },
        { label: "Region", value: formValues.contactInfo?.region },
      ],
    },
    {
      title: "Next of Kin",
      fields: [
        { label: "Full Name", value: formValues.contactInfo?.nextOfKinFullname },
        { label: "Mobile", value: formValues.contactInfo?.nextOfKinMobile },
        { label: "Profession", value: formValues.contactInfo?.nextOfKinProfession },
        { label: "Relationship", value: formValues.contactInfo?.nextOfKinRelationship },
        { label: "Address", value: formValues.contactInfo?.nextOfKinAddress },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <Card key={section.title} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {section.fields.map(
              (field) =>
                field.value && (
                  <div key={field.label} className="space-y-1">
                    <p className="text-sm text-muted-foreground">{field.label}</p>
                    <p className="font-medium">{field.value}</p>
                  </div>
                )
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}