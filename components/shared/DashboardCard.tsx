"use client"

import { cn } from '@/lib/utils';
import React from 'react'

export type Props = {
    icon?: string;
    figureNumber: number;
    label: string;
    description: string;
}

export default function CardAnalytic({}: Props) {
  return (
    <CardContentDetail>
        <div className='flex flex-col'>

        </div>
    </CardContentDetail>
  )
}

export function CardContentDetail(props: React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={cn('flex w-full flex-col gap-1 rounded-xl border p-5', props.children)}/>
    )
}
