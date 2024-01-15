'use client';
import Image from 'next/image'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import Nav from './components/Nav'
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import { TbWorldCode, TbCode, TbDeviceMobileCode, TbDeviceDesktopCode, TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { FaEnvelope, FaLine } from "react-icons/fa6";
import { motion } from 'framer-motion';
import info from './info.json';

export default function Home() {
  const router = useRouter()

  const moveUp = {
    "init": {
      "y": "300px",
      "opacity": 0
    },
    "end": {
      "y": "0",
      "opacity": 1,
      "transition": {
        "type": "tween",
        "delay": 0.5
      }
    }
  }

  const fadeIn = {
    "init": {
      "opacity": 0
    },
    "end": {
      "opacity": 1,
      "transition": {
        "type": "tween",
        "delay": 1,
        "duration": 1,
      }
    }
  }


  const [imageLoaded, setImageLoaded] = useState(false);



  return (
    <main className=''>
      <Nav index="home" />

      {/* BODY */}
      {/* First row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl p-4 justify-center mx-auto mt-4">
        <motion.div className="col-span-2 order-1" initial={{
          "x": "-100vw"
        }}
          animate={{
            "x": "0"
          }}
          transition={
            {
              "type": "tween",
            }
          }
        >
          <Card className='rounded-3xl h-full hover:scale-[1.02] cursor-default p-4'>
            <CardBody className='justify-center p-4'>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 ">

                <Image
                  src="/assets/petchx.png"
                  className='rounded-tl-3xl rounded-br-3xl pointer-events-none'
                  width={220}
                  height={220}
                  alt="Petchx Logo"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                />
                {!imageLoaded && <Skeleton className="rounded-lg h-[220px] min-w-[220px] rounded-tl-3xl rounded-br-3xl">

                </Skeleton>}

                <div className='justify-start flex-col w-full items-start'>
                  <h1 className='mt-2 opacity-50'>{info.role}</h1>
                  <h1 className='mt-2 text-4xl font-bold'>{info.name}</h1>
                  <h1 className='mt-2'>{info.description}</h1>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
        <motion.div className="col-span-2 justify-between flex flex-col gap-6 order-2" initial={{
          "x": "100vw"
        }}
          animate={{
            "x": "0"
          }}
          transition={
            { "type": "tween" }
          }>
          <Card className='rounded-full h-full hover:scale-[1.02]'>
            <CardBody className='items-center justify-center'>
              Fullstack Developer
            </CardBody>
          </Card>
          <div className="grid-cols-1 sm:grid-cols-2 grid gap-6 order-3">
            <Link href={"/about"}>
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
                    <h1 className='text-xl'>About me</h1>
                  </CardFooter>
                </CardBody>

              </Card>
            </Link>
            <Link href={"/projects"}>
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
            </Link>

          </div>
        </motion.div>


        {/* <div className="col-span-3 grid-cols-3 grid gap-6">
        </div> */}
        <motion.div className="col-span-2 sm:col-span-1 h-60 order-5 lg:order-4" variants={moveUp} initial="init" animate="end">
          <Card className='rounded-3xl h-full hover:scale-[1.02]' >
            <CardBody className='justify-center items-center'>
              <div className="px-4 w-full">
                <div className="h-32 rounded-3xl bg-secondary flex items-center justify-center text-primary gap-4">
                  <Link href={"https://github.com/petchxx"}>
                    <div className="rounded-full bg-content1 p-4 hover:text-foreground">
                      <TbBrandGithub size={40} />
                    </div>
                  </Link>
                  <Link href={"https://www.instagram.com/petchxig"}>
                    <div className="rounded-full bg-content1 p-4 hover:text-foreground">
                      <TbBrandInstagram size={40} />
                    </div>
                  </Link>
                </div>

              </div>
              <CardFooter className='justify-start flex-col items-start'>
                <h1 className='opacity-50 text-xs'>STAY WITH ME</h1>
                <h1 className='text-xl'>Profiles</h1>
              </CardFooter>
            </CardBody>
          </Card>

        </motion.div>

        <motion.div className="col-span-2 lg:col-span-2 h-60 order-4 lg:order-5" variants={moveUp} initial="init" animate="end">
          <Link href={"/services"}>
            <Card className='rounded-3xl h-full hover:scale-[1.02]'>
              <CardBody className='justify-center items-center'>
                <div className="h-32 flex gap-10 text-primary items-center">
                  <TbCode size={50} />
                  <TbDeviceMobileCode size={50} />
                  <TbDeviceDesktopCode size={50} />
                  <TbWorldCode size={50} />

                </div>
                <CardFooter className='justify-start flex-col items-start'>
                  <h1 className='opacity-50 text-xs'>SPECIALIZATION</h1>
                  <h1 className='text-xl'>Service Offering</h1>
                </CardFooter>
              </CardBody>
            </Card>
          </Link>
        </motion.div>

        <motion.div className="col-span-2 sm:col-span-1 h-60 order-6 " variants={moveUp} initial="init" animate="end">
          <Link href={"/contact"}>
            <Card className='rounded-3xl h-full hover:scale-[1.02]' onClick={() => { router.push("/contact") }}>
              <CardBody className='justify-center items-center'>
                <div className="px-4 w-full">
                  <div className="h-32 rounded-3xl bg-secondary flex items-center justify-center text-primary gap-4">
                    <div className="rounded-full bg-content1 p-5 hover:text-foreground" onClick={(e) => {
                      e.preventDefault();
                      router.push("mailto:petchxpanuphong@gmail.com")
                    }}>
                      <FaEnvelope size={25} />
                    </div>
                    <div className="rounded-full bg-content1 p-5 hover:text-foreground" onClick={
                      (e) => {
                        e.preventDefault();
                        router.push("https://lin.ee/1kSm3fq")
                      }
                    }>
                      <FaLine size={25} />
                    </div>

                  </div>

                </div>
                <CardFooter className='justify-start flex-col items-start'>
                  <h1 className='opacity-50 text-xs'>START A PROJECT</h1>
                  <h1 className='text-xl'>Contact</h1>
                </CardFooter>
              </CardBody>

            </Card>
          </Link>
        </motion.div>



        <motion.div className="col-span-2 0 h-60 order-7" variants={fadeIn} initial="init" animate="end">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody className='justify-center items-center'>
              <h1 className='text-5xl font-bold'>COMMING SOON</h1>
            </CardBody>
          </Card>
        </motion.div>
        <motion.div className=" col-span-2 h-60 order-8" variants={fadeIn} initial="init" animate="end">
          <Card className='rounded-3xl h-full hover:scale-[1.02]'>
            <CardBody className='justify-center items-center'>
              <h1 className='text-5xl font-bold'>COMMING SOON</h1>
            </CardBody>
          </Card>
        </motion.div>
      </div>

    </main >
  )
}
