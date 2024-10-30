import { MultiStepForm } from "@/components/shared/Multisteps";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="p-[.375rem] text-center gap-1 inline-flex mx-auto m-0 rounded-[.375rem] border-[#DCDCDC] border">
        <span className="text-[#424242] text-sm font-medium">PRIVATE REGISTRATION</span>
        <span className="text-[#878787] text-sm">LAGOS, NG</span>
      </div>
      <div className="mt-8 w-[35rem]">
      <MultiStepForm />

      </div>
    </div>
  );
}
