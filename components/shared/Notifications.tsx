import React from 'react'
import { Bell, CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type Props = {}

export default function Notifications({}: Props) {
  return (
    // <div className='flex bg-[#FAFAFA] py-3 px-3 rounded-full'>
    //    <Bell strokeWidth={2} color="#000C14" size={24} />
    // </div>
    <Button
    variant={"outline"}
    className={cn(
      "max-w-fit py-4 px-4 inline-flex items-center rounded-full font-normal"
    )}
  >
    <Bell size={24} />
  </Button>
  )
}