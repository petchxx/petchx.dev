import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='h-28 flex justify-center items-center'>
            <Link href="#">
                <Image
                    src="/assets/petchx-dark.svg"
                    className="hidden dark:block pointer-events-none"
                    width={120}
                    height={43}
                    alt="Petchx Logo"
                />
                <Image
                    src="/assets/petchx-light.svg"
                    className="block dark:hidden pointer-events-none"
                    width={120}
                    height={43}
                    alt="Petchx Logo"
                /></Link>
        </footer>
    )
}
