'use client';
import Image from 'next/image'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import Nav from './components/Nav'
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import { TbWorldCode, TbCode, TbDeviceMobileCode, TbDeviceDesktopCode, TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()


  return (
    <main className=''>
      <Nav />

      {/* BODY */}
      {/* First row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl p-4 justify-center mx-auto mt-4">
        <div className="col-span-2 order-1">
          <Card className='rounded-3xl h-full hover:scale-[1.02] cursor-default p-4'>
            <CardBody className='justify-center p-4'>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 ">
                <Image
                  src="/assets/petchx.png"
                  className='rounded-tl-3xl rounded-br-3xl pointer-events-none'
                  width={220}
                  height={220}
                  alt="Petchx Logo"
                />

                <CardFooter className='justify-start flex-col items-start'>
                  <h1 className='mt-2 opacity-50'>Fullstack Developer</h1>
                  <h1 className='mt-2 text-4xl font-bold'>Petchx</h1>
                  <h1 className='mt-2'>From database to user interface, I do it all</h1>
                </CardFooter>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-2 justify-between flex flex-col gap-6 order-2">
          <Card className='rounded-full h-full hover:scale-[1.02]'>
            <CardBody className='items-center justify-center'>
              Fullstack Developer
            </CardBody>
          </Card>
          <div className="grid-cols-1 sm:grid-cols-2 grid gap-6 order-3">
            <Card className='rounded-3xl col-span-1 h-60 hover:scale-[1.02]'>
              <CardBody className='items-center justify-center'>
                <Image
                  src="/assets/memoji.png"
                  className='pointer-events-none'
                  width={126}
                  height={126}
                  alt="Petchx Logo"
                />
                <CardFooter className='justify-start flex-col items-start p-4'>
                  <h1 className='opacity-50 text-xs'>MORE ABOUT ME</h1>
                  <h1 className='text-xl'>Credentials</h1>
                </CardFooter>
              </CardBody>

            </Card>
            <Card className='rounded-3xl col-span-1 h-60 hover:scale-[1.02]'>
              <CardBody className='items-center justify-center'>
                <Image
                  src="/assets/logo.gif"
                  className='pointer-events-none'
                  width={126}
                  height={126}
                  alt="Petchx Logo"
                />
                <CardFooter className='justify-start flex-col items-start'>
                  <h1 className='opacity-50 text-xs'>SHOW CASE</h1>
                  <h1 className='text-xl'>Projects</h1>
                </CardFooter>
              </CardBody>

            </Card>
          </div>
        </div>


        {/* <div className="col-span-3 grid-cols-3 grid gap-6">
        </div> */}
        <div className="col-span-2 sm:col-span-1 h-60 order-5 lg:order-4">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody className='justify-center items-center'>
              <div className="h-32">

              </div>
              <CardFooter className='justify-start flex-col items-start'>
                <h1 className='opacity-50 text-xs'>COMMING SOON</h1>
                <h1 className='text-xl'>COMMING SOON</h1>
              </CardFooter>
            </CardBody>

          </Card>
        </div>
        <div className="col-span-2 lg:col-span-2 h-60 order-4 lg:order-5">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody className='justify-center items-center'>
              <div className="h-32 flex gap-10 text-primary items-center">
                <TbCode size={50} />
                <TbDeviceMobileCode size={50} />
                <TbWorldCode size={50} />
                <TbDeviceDesktopCode size={50} />

              </div>
              <CardFooter className='justify-start flex-col items-start'>
                <h1 className='opacity-50 text-xs'>SPECIALIZATION</h1>
                <h1 className='text-xl'>Service Offering</h1>
              </CardFooter>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-2 sm:col-span-1 h-60 order-6 cursor-pointer" onClick={() => router.push('#')}>
          <Card className='rounded-3xl h-full hover:scale-[1.02]' >
            <CardBody className='justify-center items-center'>
              <div className="px-4 w-full">
                <div className="h-32 rounded-3xl bg-secondary flex items-center justify-center text-primary gap-4">
                  <div className="rounded-full bg-content1 p-4 hover:text-foreground" onClick={(e) => {
                    e.stopPropagation();
                    router.push('https://github.com/petchxx');
                  }}>
                    <TbBrandGithub size={40} />
                  </div>
                  <div className="rounded-full bg-content1 p-4 hover:text-foreground" onClick={(e) => {
                    e.stopPropagation();
                    router.push('https://www.instagram.com/petchxig/');
                  }}>
                    <TbBrandInstagram size={40} />
                  </div>
                </div>

              </div>
              <CardFooter className='justify-start flex-col items-start'>
                <h1 className='opacity-50 text-xs'>STAY WITH ME</h1>
                <h1 className='text-xl'>Profiles</h1>
              </CardFooter>
            </CardBody>
          </Card>
        </div>



        <div className="col-span-2 0 h-60 order-7">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody className='justify-center items-center'>
              <h1 className='text-5xl font-bold'>COMMING SOON</h1>
            </CardBody>
          </Card>
        </div>
        <div className=" col-span-2 h-60 order-8">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody className='justify-center items-center'>
              <h1 className='text-5xl font-bold'>COMMING SOON</h1>
            </CardBody>
          </Card>
        </div>
      </div>
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
    </main>
  )
}
