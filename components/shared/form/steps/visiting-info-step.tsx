"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { CustomDatePicker } from "@/components/ui/custom-date-picker"

export function VisitingInfoStep({ form }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="visitingInfo.consultationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consultation Date</FormLabel>
              <CustomDatePicker
                value={field.value}
                onChange={field.onChange}
                placeholder="Select consultation date"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visitingInfo.consultationTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consultation Time</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="visitingInfo.consultationFee"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Consultation Fee (Fixed)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter consultation fee" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="visitingInfo.consultationComplaints"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consultation Complaints</FormLabel>
              <FormControl>
                <Input placeholder="Enter complaints" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visitingInfo.consultationRemarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consultation Remarks</FormLabel>
              <FormControl>
                <Input placeholder="Enter remarks" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="visitingInfo.visitingDepartment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visiting Department</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="gopd">GOPD</SelectItem>
                  <SelectItem value="dentist">Dentist</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visitingInfo.consultationType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consultation Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select consultation type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Consultation</SelectItem>
                  <SelectItem value="specialist">Specialist Consultation</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="visitingInfo.referredBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Referred By</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select referring doctor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="dr-sarah">Dr. Sarah</SelectItem>
                  <SelectItem value="dr-john">Dr. John</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visitingInfo.visitingType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visiting Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select visiting type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="first">First Time Visit</SelectItem>
                  <SelectItem value="follow-up">Follow-up Visit</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="visitingInfo.consultingDoctor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consulting Doctor</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select consulting doctor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="dr-gerald">Dr. Gerald</SelectItem>
                  <SelectItem value="dr-abraham">Dr. Abraham</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visitingInfo.transferredFrom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transferred From</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hospital" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general-hospital">General Hospital</SelectItem>
                  <SelectItem value="specialist-hospital">Specialist Hospital</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}