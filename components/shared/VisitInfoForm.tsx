import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { personalInfoSchema } from '../zodSchemas';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { VisitInfo, visitInfoSchema } from "@/lib/validators/reg.schema";
// import { Button, Input, Label, Text } from '@shadcn/ui';

export function VisitInfoForm({
  onSubmit,
}: {
  onSubmit: (data: VisitInfo) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisitInfo>({
    resolver: zodResolver(visitInfoSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-2">
        <Label>
          <span>Purpose</span>
          <Input {...register("purpose")} />
          {errors.purpose && <span color="red">{errors.purpose.message}</span>}
        </Label>
      </div>
      <div className="mt-2">
        <Label>
          <span>Visit Date</span>
          <Input type="date" {...register("visitDate")} />
          {errors.visitDate && (
            <span color="red">{errors.visitDate.message}</span>
          )}
        </Label>
      </div>
      {/* <Button type="submit">Next</Button> */}
    </form>
  );
}
