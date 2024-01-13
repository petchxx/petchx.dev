'use client';
import Image from 'next/image'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import Nav from './components/Nav'
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import { TbWorldCode, TbCode, TbDeviceMobileCode, TbDeviceDesktopCode } from "react-icons/tb";

export default function Home() {


  return (
    <main className=''>
      <Nav />

      {/* BODY */}
      {/* First row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl p-4 justify-center mx-auto mt-4">
        <div className="col-span-2 order-1">
          <Card className='rounded-3xl h-full hover:scale-[1.02] cursor-default p-6'>
            <CardBody className='justify-center p-4'>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
                <Image
                  src="/assets/petchx.png"
                  className='rounded-tl-3xl rounded-br-3xl mr-6 '
                  width={220}
                  height={220}
                  alt="Petchx Logo"
                />
                {/* <div className="min-w-48 flex flex-col ">
                  <h1 className='mt-2 opacity-50'>Fullstack Developer</h1>
                  <h1 className='mt-2 text-4xl font-bold'>Petchx</h1>
                  <h1 className='mt-2'>From database to user interface, I do it all</h1>
                </div> */}
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
                  src="/assets/sign.png"
                  width={224}
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
        <div className="col-span-1 h-60 order-5 lg:order-4">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              <div className="h-32"></div>
              <CardFooter className='justify-start flex-col items-start'>
                <h1 className='opacity-50 text-xs'>...</h1>
                <h1 className='text-xl'>...</h1>
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

        <div className="col-span-1 h-60 order-6">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              {/* todo */}3
            </CardBody>
          </Card>
        </div>



        <div className="col-span-2 0 h-60 order-7">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              {/* todo */}
            </CardBody>
          </Card>
        </div>
        <div className=" col-span-2 h-60 order-8">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              {/* todo */}
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  )
}
