"use client"

import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"

export function CommunicationStep({ form }) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="communication.sms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">SMS Notifications</FormLabel>
              <FormDescription>
                Receive appointment reminders and updates via SMS
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="communication.push"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Push Notifications</FormLabel>
              <FormDescription>
                Receive real-time updates through push notifications
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}