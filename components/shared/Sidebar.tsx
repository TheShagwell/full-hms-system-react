"use client";

import { sidebaNavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {}

export default function Sidebar({ }: Props) {
  const pathname = usePathname();

  return (
    <aside className='hidden h-screen bg-[#FBFEFB] w-72 px-3 shadow-md lg:flex'>
      <div className="flex mt-4 w-full flex-col border-solid">
        <Link href="/dashboard" className='px-4 md:py-2 border-solid'>
          <Image src="/assets/icons/_system-logo.svg" alt='logo' width={172} height={32} />
        </Link>
        <nav className='h-full overflow-auto flex-col justify-between md:flex md:gap-4 mt-5'>
          <ul className="hidden w-full flex-col justify-start items-start gap-1 md:flex">
            {sidebaNavLinks.map((link) => {
              const isActive = link.route === pathname;
              return (
                <li key={link.route} className={`w-full border-solid`}>
                  <Link className={`flex py-3 px-4 gap-3 p-16-semibold text-base max-w-full whitespace-nowrap rounded-full bg-cover transition-all ${isActive ? 'bg-[#F3FCF3] text-[#075D24] fill-current font-semibold' : 'text-[#676767]'} ${!isActive && 'hover:bg-[#F3FCF3] hover:text-[#075D24]'}`} href={link.route}>
                    <Image 
                      src={link.icon} 
                      alt={link.alt} 
                      width={24} 
                      height={24} 
                      className={`${isActive && 'stroke-red-400 fill-purple-700'}`} 
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
