"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const navigate = useRouter();

  return (
   <div className="w-full">
   <button
   onClick={
    ()=>{
      navigate.push('/sign-in')
    }
   }
   >
    navigate
   </button>
   </div>
  );
}
