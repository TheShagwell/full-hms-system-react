import { MultiStepForm } from "@/components/shared/Multisteps";

export default function Home() {
  return (
    <div>
      <div className="p-[.375rem] gap-1 inline-block mx-auto m-0 rounded-[.375rem] border-[#DCDCDC] border">
        <span className="text-[#424242] text-sm font-medium">PRIVATE REGISTRATION</span>
        <span className="text-[#878787] text-sm">LAGOS, NG</span>
      </div>
      <MultiStepForm />
    </div>
  );
}
