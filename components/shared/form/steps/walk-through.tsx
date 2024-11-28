"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function WalkThroughStep({ form }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="walkThrough.registrationType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Registration Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select registration type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="normal">Normal Registration</SelectItem>
                <SelectItem value="medical">Medical Legal Case</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="walkThrough.tagPatient"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tag Patient</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select patient tag" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="vip">VIP</SelectItem>
                <SelectItem value="patient">Patient</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="walkThrough.reasonForVisit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reason for Visit</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select reason for visit" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="drugs">Pick up Drugs</SelectItem>
                <SelectItem value="doctor">See a Doctor</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}