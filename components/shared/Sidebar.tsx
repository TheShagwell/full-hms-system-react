"use client";

import { sidebaNavLinks } from '@/constants/menu-items';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {}

export default function Sidebar({ }: Props) {
  const pathname = usePathname();

  return (
    <aside className='hidden h-screen bg-[#FBFEFB] w-72 px-3 lg:flex'>
      <div className="flex mt-0 w-full flex-col">
        <Link href="/dashboard" className="sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
          <Image src="/assets/icons/_system-logo.svg" alt='logo' width={172} height={32} />
        </Link>
        
        <ScrollArea>
          <nav className='h-full mt-3 mb-6 flex-col justify-between md:flex md:gap-4'>
            <ul className="hidden w-full flex-col justify-start items-start gap-1 md:flex">
              {sidebaNavLinks.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li key={link.route} className={`w-full border-solid`}>
                    <Link className={`flex py-2 px-4 gap-3 text-[.9375rem] max-w-full whitespace-nowrap rounded-full bg-cover transition-all ${isActive ? 'bg-[#F3FCF3] text-[#075D24] fill-current font-semibold' : 'text-[#676767]'} ${!isActive && 'hover:bg-[#F3FCF3] hover:text-[#075D24]'}`} href={link.route}>
                    <span
                      className={cn(
                        'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                        )}
                    >
                      {link?.icon}
                    </span>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}
