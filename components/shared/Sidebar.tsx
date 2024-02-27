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
    <aside className='hidden h-screen bg-[#e9fbe9] w-72 px-3 shadow-md shadow-purple-200/50 lg:flex'>
      <div className="flex w-full flex-col border-solid border-yellow-800 border-2">
        <Link href="/dashboard" className='lg:py-5 md:py-2 border-solid border-red-500 border-2'>
          <Image src="/assets/icons/_system-logo.svg" alt='logo' width={172} height={32} />
        </Link>
        <nav className='h-full overflow-auto flex-col justify-between md:flex md:gap-4 mt-6'>
          <ul className="hidden w-full flex-col justify-start items-start gap-1 md:flex border-solid border-black-500 border-2">
            {sidebaNavLinks.map((link) => {
              const isActive = link.route === pathname;
              return (
                <li key={link.route} className={`w-full border-solid border-red-500 border-2`}>
                  <Link className={`flex py-3 px-4 gap-3 p-16-semibold text-base max-w-full whitespace-nowrap rounded-full bg-cover transition-all ${isActive ? 'bg-[#F3FCF3] text-[#075D24]  font-semibold' : 'text-[#676767]'} ${!isActive && 'hover:bg-[#F3FCF3] hover:text-[#075D24]'}`} href={link.route}>
                    <Image src={link.icon} alt='icon' width={24} height={24} className={`${!isActive && 'hover:fill-current'}`} />
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
