import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// import { personalInfoSchema } from '../zodSchemas';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { PersonalInfo, personalInfoSchema } from '@/lib/validators/reg.schema';
// import { Button, Input, Label, Text } from '@shadcn/ui';


export function PersonalInfoForm({ onSubmit }: { onSubmit: (data: PersonalInfo) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <span>First Name</span>
        <Input {...register('firstName')} />
        {errors.firstName && <span color="red">{errors.firstName.message}</span>}
      </Label>
      <Label>
        <span>Last Name</span>
        <Input {...register('lastName')} />
        {errors.lastName && <span color="red">{errors.lastName.message}</span>}
      </Label>
      <Label>
        <span>Date of Birth</span>
        <Input type="date" {...register('dateOfBirth')} />
        {errors.dateOfBirth && <span color="red">{errors.dateOfBirth.message}</span>}
      </Label>
      {/* <Button type="submit">Next</Button> */}
    </form>
  );
}