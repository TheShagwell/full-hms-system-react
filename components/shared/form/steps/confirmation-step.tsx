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
        { label: "Title", value: formValues.title },
        { label: "Full Name", value: formValues.fullName },
        { label: "Profession", value: formValues.occupation },
        { label: "Mobile Number", value: formValues.mobileNumber },
        { label: "Additional Mobile Number", value: formValues.additionalNumber },
        { label: "Email", value: formValues.email },
        {
          label: "Date of Birth",
          value: formValues.dateOfBirth
            ? format(new Date(formValues.basicInfo.dateOfBirth), "PPP")
            : "",
        },
        { label: "Marital Status", value: formValues.maritalStatus },
        { label: "Gender", value: formValues.gender },
        // { label: "Individual", value: formValues.basicInfo?.individual },
        { label: "Blood Group", value: formValues.bloodGroup },
        { label: "Genotype", value: formValues.genotype },
      ],
    },
    {
      title: "Contact Information",
      fields: [
        // { label: "National ID", value: formValues.contactInfo?.nationalIdNumber },
        { label: "Home Address", value: formValues.homeAddress },
        { label: "City", value: formValues.city },
        { label: "State", value: formValues.state },
        { label: "Country", value: formValues.countryNationality },
        { label: "Religion", value: formValues.religion },
        { label: "Region", value: formValues.region },
      ],
    },
    {
      title: "Next of Kin",
      fields: [
        { label: "Next of Kin Fullname", value: formValues.nextOfKinName },
        { label: "Mobile", value: formValues.nextOfKinPhoneNo },
        { label: "Profession", value: formValues.nextOfKinOccupation },
        { label: "Relationship", value: formValues.nextOfKinRelation },
        { label: "Address", value: formValues.nextOfKinAddress },
      ],
    },
    {
      title: "Visiting Information",
      fields: [
        {
            label: "Consultation Date",
            value: formValues.consultationDate
              ? format(new Date(formValues.consultationDate), "PPP")
              : "",
          },
        { label: "Consultation Fee", value: formValues.consultationFee },
        { label: "Consultation Time", value: formValues.consultationTime },
        { label: "Consultation Remarks", value: formValues.consultationRemarks },
        { label: "ConsultationComplaints", value: formValues.consultationComplaints },
        { label: "Visiting Department", value: formValues.visitingDepartment },
        { label: "Consultation Type", value: formValues.consultationType },
        { label: "Referred By", value: formValues.referredBy },
        { label: "Visiting Type", value: formValues.visitingType },
        { label: "Consulting Doctor", value: formValues.consultingDoctor },
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