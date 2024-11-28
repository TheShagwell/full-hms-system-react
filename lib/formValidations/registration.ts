import * as z from "zod";

// export const walkThroughSchema = z.object({
//   registrationType: z.string({
//     required_error: "Please select a registration type",
//   }).optional(),
//   tagPatient: z.string({
//     required_error: "Please select a patient tag",
//   }).optional(),
//   reasonForVisit: z.string({
//     required_error: "Please select a reason for visit",
//   }).optional(),
// });

export const basicInfoSchema = z.object({
  title: z.string({
    required_error: "Please select a title",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters",
  }),
  mrNumber: z.string().min(2, {
    message: "MrNo.",
  }),
  profession: z.string().optional(),
  occupation: z.string().optional(),
  mobileNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters",
  }),
  additionalNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  dateOfBirth: z.date({
    required_error: "Please select a date of birth",
  }),
  maritalStatus: z.string().optional(),
  gender: z.string({
    required_error: "Please select a gender",
  }),
  // individual: z.string().optional(),
  bloodGroup: z.string().optional(),
  genotype: z.string().optional(),
});

export const contactInfoSchema = z.object({
  // nationalIdNumber: z.string().optional(),
  // trackingId: z.string().optional(),
  homeAddress: z.string().min(5, {
    message: "Address must be at least 5 characters",
  }),
  city: z.string({
    required_error: "Please enter a city",
  }),
  nextOfKinName: z.string().min(2, {
    message: "Next of kin name must be at least 2 characters",
  }),
  nextOfKinPhoneNo: z.string().min(10, {
    message: "Phone number must be at least 10 characters",
  }),
  nextOfKinOccupation: z.string().optional(),
  nextOfKinRelation: z.string({
    required_error: "Please select a relationship",
  }),
  nextOfKinAddress: z.string().min(5, {
    message: "Address must be at least 5 characters",
  }),
  region: z.string().optional(),
  countryNationality: z.string({
    required_error: "Please select a country",
  }),
  religion: z.string().optional(),
  state: z.string({
    required_error: "Please select a state",
  }),
});

export const visitingInfoSchema = z.object({
  consultationDate: z.date({
    required_error: "Please select a consultation date",
  }),
  consultationFee: z.string({
    required_error: "Please enter consultation fee",
  }),
  consultationTime: z.string({
    required_error: "Please select consultation time",
  }),
  consultationComplaints: z.string().optional(),
  consultationRemarks: z.string().optional(),
  visitingDepartment: z.string({
    required_error: "Please select a department",
  }),
  consultationType: z.string({
    required_error: "Please select consultation type",
  }),
  referredBy: z.string().optional(),
  visitingType: z.string({
    required_error: "Please select visiting type",
  }),
  consultingDoctor: z.string({
    required_error: "Please select a doctor",
  }),
  // transferredFrom: z.string().optional(),
});

// export const photoDetailsSchema = z.object({
//   photo: z.string().optional(),
// });

// export const communicationSchema = z.object({
//   sms: z.boolean().default(false).optional(),
//   push: z.boolean().default(false).optional(),
// });

export const registrationSchema = z.object({
  // walkThrough: walkThroughSchema,
  basicInfo: basicInfoSchema,
  contactInfo: contactInfoSchema,
  visitingInfo: visitingInfoSchema,
  // photoDetails: photoDetailsSchema,
  // communication: communicationSchema,
});

export type RegistrationData = z.infer<typeof registrationSchema>;