import { Bell, ChevronDown } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type Props = {}

export default function ProfileNavHeader({}: Props) {
  return (
    <div className='max-w-full'>
      <Button
        variant={"outline"}
        className={cn(
          "w-[100%] h-full px-2 inline-flex justify-between gap-3 font-normal items-center rounded-full"
        )}
      >
        <div className="flex gap-2 items-center">
          <div className="rounded-3xl h-full w-full p-2 bg-[#FAFAFA]">
            <span className='text-base font-medium'>WJ</span>
          </div>
          <p className='text-[1rem]'>Williams Johnson Ebuka</p>
        </div>
        <ChevronDown size={24} />
      </Button>
    </div>
  )
}