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
          "w-[100%] h-full px-2 py-1 inline-flex justify-between gap-3 font-normal items-center rounded-full"
        )}
      >
        <div className="flex gap-2 items-center">
          <div className="rounded-3xl h-full w-full p-2 bg-[#F3F3F1]">
            <span className='text-base font-medium'>WJ</span>
          </div>
          <p className='text-[1rem]'>Williams Johnson Ebuka</p>
        </div>
        <ChevronDown size={24} />
      </Button>
    </div>
  )
}