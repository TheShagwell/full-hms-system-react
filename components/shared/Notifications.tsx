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
    variant={"secondary"}
    className={cn(
      "rounded-full gap-2 flex justify-center h-[48px] w-[48px] px-2 py-1 items-center"
    )}
  >
    <Bell size={24} />
  </Button>
  )
}