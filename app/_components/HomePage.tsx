"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaEnvelope, FaLine } from "react-icons/fa6";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import info from "@/public/info.json";
import { useState } from "react";
import Nav from "./Nav";
import {
  TbCode,
  TbDeviceDesktopCode,
  TbDeviceMobileCode,
  TbWorldCode,
  TbBrandGithub,
  TbBrandInstagram,
} from "react-icons/tb";

type Props = {};

export default function HomePage({}: Props) {
  const router = useRouter();

  const moveUp = {
    init: {
      y: "300px",
      opacity: 0,
    },
    end: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        ease: "easeOut",
        duration: 0.5,
        delay: 1,
      },
    },
  };

  const fadeIn = {
    init: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        delay: 2,
        duration: 0.5,
      },
    },
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <main className="">
      <Nav index="home" />

      {/* BODY */}
      {/* First row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl p-4 justify-center mx-auto mt-16">
        <motion.div
          className="col-span-2 order-1"
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: "0",
          }}
          transition={{
            type: "spring",
            damping: 18,
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
            <Card className="rounded-3xl cursor-default h-full p-4">
              <CardBody className="justify-center p-4">
                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 ">
                  <Skeleton
                    className="h-52 min-w-52 rounded-tl-3xl rounded-br-3xl"
                    isLoaded={imageLoaded}
                  >
                    <Image
                      src="/assets/petchx.png"
                      className=" pointer-events-none object-cover rounded-tl-3xl rounded-br-3xl"
                      fill={true}
                      alt="Petchx Panuphong Burakitphachai"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                    />
                  </Skeleton>

                  <CardFooter className="justify-start flex-col w-full items-start">
                    <h1 className="mt-2 opacity-50">{info.role}</h1>
                    <h1 className="mt-2 text-4xl font-bold">{info.name}</h1>
                    <h1 className="mt-2">{info.description}</h1>
                  </CardFooter>
                </div>
              </CardBody>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className="col-span-2 justify-between flex flex-col gap-4 order-2"
          initial={{
            x: "100vw",
          }}
          animate={{
            x: "0",
          }}
          transition={{
            type: "spring",
            damping: 18,
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
            <Card className="rounded-full h-full ">
              <CardBody className="items-center justify-center">
                Fullstack Developer
              </CardBody>
            </Card>
          </div>
          <div className="grid-cols-1 sm:grid-cols-2 grid gap-4 order-3">
            <Link href={"/about"}>
              <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
                <Card className="rounded-3xl col-span-1 h-56 ">
                  <CardBody className="items-center justify-center">
                    <Image
                      src="/assets/memoji.png"
                      className="pointer-events-none"
                      width={126}
                      height={126}
                      alt="Petchx Panuphong Burakitphachai"
                    />
                    <CardFooter className="justify-start flex-col items-start p-4">
                      <h1 className="opacity-50 text-xs">MORE ABOUT ME</h1>
                      <h1 className="text-xl">About me</h1>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </Link>
            <Link href={"/projects"}>
              <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
                <Card className="rounded-3xl col-span-1 h-56 ">
                  <CardBody className="items-center justify-center">
                    <Image
                      src="/assets/logo.gif"
                      className="pointer-events-none"
                      width={126}
                      height={126}
                      alt="Petchx Panuphong Burakitphachai"
                    />
                    <CardFooter className="justify-start flex-col items-start">
                      <h1 className="opacity-50 text-xs">SHOW CASE</h1>
                      <h1 className="text-xl">Projects</h1>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* <div className="col-span-3 grid-cols-3 grid gap-4">
          </div> */}
        <motion.div
          className="col-span-2 sm:col-span-1 h-56 order-5 lg:order-4"
          variants={moveUp}
          initial="init"
          animate="end"
        >
          <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
            <Card className="rounded-3xl h-full ">
              <CardBody className="justify-center items-center">
                <div className="px-4 w-full">
                  <div className="h-32 rounded-3xl bg-secondary flex items-center justify-center text-primary gap-4">
                    <Link
                      aria-label="Petchxx"
                      href={"https://github.com/petchxx"}
                    >
                      <div className="rounded-full bg-content1 p-4 hover:text-foreground">
                        <TbBrandGithub size={40} />
                      </div>
                    </Link>
                    <Link
                      aria-label="Petchxig"
                      href={"https://www.instagram.com/petchxig"}
                    >
                      <div className="rounded-full bg-content1 p-4 hover:text-foreground">
                        <TbBrandInstagram size={40} />
                      </div>
                    </Link>
                  </div>
                </div>
                <CardFooter className="justify-start flex-col items-start">
                  <h1 className="opacity-50 text-xs">STAY WITH ME</h1>
                  <h1 className="text-xl">Profiles</h1>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
        </motion.div>

        <motion.div
          className="col-span-2 lg:col-span-2 h-56 order-4 lg:order-5"
          variants={moveUp}
          initial="init"
          animate="end"
        >
          <Link href={"/services"}>
            <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
              <Card className="rounded-3xl h-full">
                <CardBody className="justify-center items-center">
                  <div className="h-32 flex gap-10 text-primary items-center">
                    <TbCode size={50} />
                    <TbDeviceMobileCode size={50} />
                    <TbDeviceDesktopCode size={50} />
                    <TbWorldCode size={50} />
                  </div>
                  <CardFooter className="justify-start flex-col items-start">
                    <h1 className="opacity-50 text-xs">SPECIALIZATION</h1>
                    <h1 className="text-xl">Service Offering</h1>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="col-span-2 sm:col-span-1 h-56 order-6 "
          variants={moveUp}
          initial="init"
          animate="end"
        >
          <Link href={"/contact"}>
            <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
              <Card
                className="rounded-3xl h-full"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                <CardBody className="justify-center items-center">
                  <div className="px-4 w-full">
                    <div className="h-32 rounded-3xl bg-secondary flex items-center justify-center text-primary gap-4">
                      <div
                        className="rounded-full bg-content1 p-5 hover:text-foreground"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("mailto:petchxpanuphong@gmail.com");
                        }}
                      >
                        <FaEnvelope size={25} />
                      </div>
                      <div
                        className="rounded-full bg-content1 p-5 hover:text-foreground"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("https://lin.ee/1kSm3fq");
                        }}
                      >
                        <FaLine size={25} />
                      </div>
                    </div>
                  </div>
                  <CardFooter className="justify-start flex-col items-start">
                    <h1 className="opacity-50 text-xs">START A PROJECT</h1>
                    <h1 className="text-xl">Contact</h1>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="col-span-2 0 h-56 order-7"
          variants={fadeIn}
          initial="init"
          animate="end"
        >
          <div
            className="transition-transform h-full cursor-pointer duration-300 hover:scale-[1.02]"
            onClick={() => router.push("https://getclockin.com")}
          >
            <Card className="group rounded-3xl h-full ">
              <CardBody className="justify-center items-center">
                <h1 className="text-5xl font-bold group-hover:text-[#f5a524] ">
                  ClockIn
                </h1>
              </CardBody>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className=" col-span-2 h-56 order-8"
          variants={fadeIn}
          initial="init"
          animate="end"
        >
          <div
            className="cursor-pointer transition-transform h-full  duration-300 hover:scale-[1.02]"
            onClick={() => router.push("https://witelab.com")}
          >
            <Card className="rounded-3xl h-full group ">
              <CardBody className="justify-center items-center">
                <h1 className="text-5xl font-bold  group-hover:text-[#3c61dd]">
                  WiteLab
                </h1>
              </CardBody>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
