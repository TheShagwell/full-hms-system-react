import React from 'react'
import { 
    Form,
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

// Custom Input Field
export function CustomInputField({
  control, 
  name, 
  label, 
  placeholder,
  type = 'text',
  description,
}: {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  description?: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
              type={type}
              placeholder={placeholder} 
              {...field}
              className="w-full"
            />
          </FormControl>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// Custom Select Field
export function CustomSelectField({
  control,
  name,
  label,
  placeholder,
  options,
  description,
}: {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  description?: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
)}

// Custom Date Picker Field
export function CustomDatePickerField({
  control,
  name,
  label,
  description,
}: {
  control: any;
  name: string;
  label: string;
  description?: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
}

// Example Usage in Form Component
export function PatientRegistrationForm() {
  // ... previous form setup code

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomInputField 
          control={form.control}
          name="fullName"
          label="Full Name"
          placeholder="Enter full name"
          description="Please enter your full legal name"
        />

        <CustomSelectField 
          control={form.control}
          name="profession"
          label="Profession"
          placeholder="Select your profession"
          options={[
            { value: 'Backend', label: 'Backend Developer' },
            { value: 'Trader', label: 'Trader' }
          ]}
        />

        <CustomDatePickerField 
          control={form.control}
          name="dateOfBirth"
          label="Date of Birth"
          description="Select your date of birth"
        />
      </form>
    </Form>
  )
}