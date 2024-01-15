import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='h-64 flex flex-col justify-center items-center'>
            <Link href="#" className='flex text-bold text-black'>
                <Image
                    src="/assets/petchx-dark.svg"
                    className="hidden dark:block pointer-events-none"
                    width={150}
                    height={50}
                    alt="Petchx Logo"
                />
                <Image
                    src="/assets/petchx-light.svg"
                    className="block dark:hidden pointer-events-none"
                    width={150}
                    height={50}
                    alt="Petchx Logo"
                />
            </Link>
            <p className="mt-2">© All rights reserved by <span className='text-primary'>Petchx</span></p>
        </footer>
    )
}
