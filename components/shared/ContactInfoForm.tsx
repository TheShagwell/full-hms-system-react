import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { personalInfoSchema } from '../zodSchemas';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ContactInfo, contactInfoSchema } from "@/lib/validators/reg.schema";
// import { Button, Input, Label, Text } from '@shadcn/ui';

export function ContactInfoForm({
  onSubmit,
}: {
  onSubmit: (data: ContactInfo) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInfo>({
    resolver: zodResolver(contactInfoSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-2">
        <Label>
          <span>Email address</span>
          <Input type="email" {...register("email")} />
          {errors.email && <span color="red">{errors.email.message}</span>}
        </Label>
      </div>
      <div className="mt-2">
        <Label>
          <span>Phone Number</span>
          <Input type="tel" {...register("phone")} />
          {errors.phone && <span color="red">{errors.phone.message}</span>}
        </Label>
      </div>
      {/* <Button type="submit">Next</Button> */}
    </form>
  );
}
