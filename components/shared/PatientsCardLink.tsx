import Link from 'next/link';
import React from 'react'

interface Card {
  icon: any;
  title: string;
  description: string;
  href: string
  onClick?: (event: Event) => void;
}

export default function PatientCardLink({icon:Icon, title,description, href}: Card) {
  return (
    <Link href={href} className='flex flex-col hover:bg-[#F1F0F0] bg-[#FAFAFA] items-center justify-center p-5'>
      <div className="h-8 w-8 text-primary mb-3 mt-[7.5rem]">
        <Icon className="text-primary-500 text-3xl"/>
      </div>
      <div className='flex flex-col items-center justify-center mb-5'>
        <h3 className="text-lg mb-3 text-[1.25rem] font-aeonik font-medium">{title}</h3>
        <p className="text-[#474747] max-w-[18.75rem] text-sm tracking-wide text-center font-aeonik font-normal">{description}</p>
      </div>
    </Link>
  )
}