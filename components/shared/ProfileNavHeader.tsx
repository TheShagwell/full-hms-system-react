import { Bell, ChevronDown } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type Props = {}

export default function ProfileNavHeader({}: Props) {
  return (
    <div className=''>
      <Button
        variant={"secondary"}
        className={cn(
          "w-[100%] h-[100%] pl-[0.375rem] pr-2 py-[0.313rem] inline-flex justify-between gap-3 font-normal items-center rounded-full"
        )}
      >
        <div className="flex gap-2 items-center">
          <div className="rounded-3xl h-full w-full p-2 bg-[#F3F3F1]">
            <span className='text-sm font-bold'>WJ</span>
          </div>
          <p className='text-[1rem]'>Williams Johnson Ebuka</p>
        </div>
        <ChevronDown size={16} />
      </Button>
    </div>
  )
}