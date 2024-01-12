'use client';
import Image from 'next/image'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import Nav from './components/Nav'
import { Card, CardBody } from "@nextui-org/react";
import { useState, useEffect } from 'react';

export default function Home() {


  return (
    <main className=''>
      <Nav />

      {/* BODY */}
      {/* First row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl p-4 justify-center mx-auto mt-4">
        <div className="col-span-2 h-80">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody className='justify-center p-4'>
              <div className="flex flex-row justify-center">
                <Image
                  src="/assets/petchx.png"
                  className='rounded-tl-3xl rounded-br-3xl'
                  width={220}
                  height={220}
                  alt="Petchx Logo"
                />
                <div className="ml-6 min-w-48">
                  <h1 className='mt-2 opacity-50'>Fullstack Developer</h1>
                  <h1 className='mt-2 text-4xl font-bold'>Petchx</h1>
                  <h1 className='mt-2'>From database to user interface, I do it all</h1>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-2 justify-between flex flex-col gap-6">
          <Card className='rounded-full h-full hover:scale-[1.02]'>
            <CardBody className='items-center justify-center'>
              Fullstack Developer
            </CardBody>
          </Card>
          <div className="grid-cols-2 grid gap-6 ">
            <Card className='rounded-3xl col-span-1 h-60 hover:scale-[1.02]'>
              <CardBody className='items-center justify-center'>
                <Image
                  src="/assets/sign.png"
                  width={224}
                  height={126}
                  alt="Petchx Logo"
                />
                <div className="flex flex-col items-start w-56 mt-4 ">
                  <h1 className='opacity-50 text-xs'>MORE ABOUT ME</h1>
                  <h1 className='text-xl'>Credentials</h1>
                </div>
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
                <div className="flex flex-col items-start w-56 mt-4 ">
                  <h1 className='opacity-50 text-xs'>SHOW CASE</h1>
                  <h1 className='text-xl'>Projects</h1>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>


        <div className="col-span-1 h-60">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              {/* todo */}
            </CardBody>
          </Card>
        </div>
        <div className="col-span-2 h-60">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              {/* todo */}
            </CardBody>
          </Card></div>
        <div className="col-span-1 h-60">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              {/* todo */}
            </CardBody>
          </Card>
        </div>



        <div className="col-span-2 0 h-60">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody>
              {/* todo */}
            </CardBody>
          </Card>
        </div>
        <div className=" col-span-2 h-60">
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
