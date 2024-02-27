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
    <aside className='hidden h-screen bg-[#FBFEFB] w-72 px-4 shadow-md shadow-purple-200/50 lg:flex'>
      <div className="flex size-full flex-col mt-10">
        <Link href="/dashboard" className='md:py-2'>
          <Image src="/assets/icons/_system-logo.svg" alt='logo' width={172} height={32} />
        </Link>
        <nav className='h-full flex-col justify-between md:flex md:gap-4 mt-10'>
          <ul className="hidden w-full flex-col items-start gap-2 md:flex  border-solid border-black-500 border-2">
            {sidebaNavLinks.map((link) => {
              const isActive = link.route === pathname;
              return (
                <li key={link.route} className={`w-100 border-solid border-red-500 border-2`}>
                  <Link className={`flex size-full py-3 px-4 gap-4 flex-center p-16-semibold max-w-full whitespace-nowrap rounded-full bg-cover transition-all ${isActive ? 'bg-[#F3FCF3] text-[#075D24]  font-semibold' : 'text-[#676767]'} ${!isActive && 'hover:bg-[#F3FCF3] hover:text-[#075D24]'}`} href={link.route}>
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
