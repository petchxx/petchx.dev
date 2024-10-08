"use client";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
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
import { ThemeSwitcher } from "./ThemeSwitcher";

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
        damping: 16,
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

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
          delay: 2,
        },
      },
    },
  };

  const flyingIcons = {
    animate: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 4,
          ease: "easeInOut",
        },
      },
    },
  };

  const zoomIn = {
    scale: 1.1,
    transition: { duration: 0.5, type: "spring" },
  };

  const [imageHover, setImageHover] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1038);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <main className="">
      <Nav index="home" />

      {/* BODY */}
      {/* First row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl p-4 justify-center mx-auto mt-20">
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
                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4">
                  <div
                    className="w-52 h-52 "
                    onMouseEnter={() =>
                      !isMobileOrTablet && setImageHover(true)
                    }
                    onMouseLeave={() =>
                      !isMobileOrTablet && setImageHover(false)
                    }
                    style={{ perspective: "500px" }}
                  >
                    <motion.div
                      initial={{ rotateY: 0 }}
                      animate={{
                        rotateY: isMobileOrTablet ? 0 : imageHover ? -180 : 0,
                      }}
                      transition={{
                        type: "spring",
                        damping: 18,
                        ease: "easeOut",
                      }}
                      // whileHover={{
                      //   rotateY: -190,
                      //   transition: {
                      //     type: "spring",
                      //     damping: 18,
                      //     duration: 0.5,
                      //   },
                      // }}
                    >
                      <Skeleton
                        className="h-52 min-w-52 group rounded-3xl "
                        isLoaded={imageLoaded}
                      >
                        {/* <div className="bg-content1 hidden group-hover:flex group-hover:opacity-100 justify-center items-center shadow-medium w-52 h-52 rounded-3xl"> */}
                        {/*   <Image */}
                        {/*     src="/assets/logo.svg" */}
                        {/*     className="pointer-events-none ring-offset-default-foreground scale-x-[-1]" */}
                        {/*     alt="Petchx Panuphong Burakitphachai" */}
                        {/*     width={100} */}
                        {/*     height={100} */}
                        {/*     onLoad={() => setImageLoaded(true)} */}
                        {/*     onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true */}
                        {/*   /> */}
                        {/* </div> */}
                        {/* <Image */}
                        {/*   src="/assets/petchx.png" */}
                        {/*   className="pointer-events-none object-cover rounded-3xl" */}
                        {/*   fill={true} */}
                        {/*   alt="Petchx Panuphong Burakitphachai" */}
                        {/*   onLoad={() => setImageLoaded(true)} */}
                        {/*   onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true */}
                        {/* /> */}
                        {imageHover ? (
                          <div className="flex justify-center items-center shadow-medium w-full h-full rounded-3xl absolute top-0 left-0 bg-content1">
                            <Image
                              src={"/assets/logo.svg"}
                              // src={"/assets/petchx.png"}

                              className="pointer-events-none ring-offset-default-foreground scale-x-[-1] "
                              alt="Petchx Panuphong Burakitphachai"
                              width={126}
                              height={126}
                              onLoad={() => setImageLoaded(true)}
                              onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                            />
                          </div>
                        ) : (
                          <Image
                            src={"/assets/petchx.png"}
                            // src="/assets/logo.gif"
                            className="pointer-events-none object-cover rounded-3xl w-full h-full "
                            fill={true}
                            alt="Petchx Panuphong Burakitphachai"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                          />
                        )}
                      </Skeleton>
                    </motion.div>
                  </div>

                  <CardFooter className="justify-start flex-col w-full items-start">
                    <div className="flex items-end gap-1">
                      <h1 className="mt-2 opacity-50">{info.role}</h1>
                    </div>
                    <h1 className="mt-2 text-4xl font-bold">{info.name}</h1>
                    <h1 className="mt-2">👋 {info.description}</h1>
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
              <CardBody className="items-start justify-start overflow-hidden">
                <motion.p
                  variants={marqueeVariants}
                  animate="animate"
                  className="whitespace-nowrap text-foreground/50 tracking-widest text-xs"
                >
                  HTML • CSS • JAVASCRIPT • TYPESCRIPT • REACT • NEXTJS •
                  TAILWINDCSS • PRISMA • DRIZZLE • FRAMERMOTION • T3 • VITE •
                  VUE • PHP • SQL • PYTHON • JAVA • FLUTTER • DART • FIREBASE •
                  NODEJS • EXPRESS • POSTGRES • MYSQL • FIGMA
                </motion.p>
              </CardBody>
            </Card>
          </div>
          <div className="grid-cols-1 sm:grid-cols-2 grid gap-4 order-3">
            <Link href={"/about"}>
              <div className="transition-transform h-full  duration-300 group hover:scale-[1.02]">
                <Card className="rounded-3xl col-span-1 h-56 ">
                  <CardBody className="items-center justify-center">
                    <motion.div
                      variants={flyingIcons}
                      whileHover={zoomIn}
                      animate="animate"
                    >
                      <Image
                        src="/assets/memoji.png"
                        className="pointer-events-none "
                        width={126}
                        height={126}
                        alt="Petchx Panuphong Burakitphachai"
                      />
                    </motion.div>
                    <CardFooter className="justify-start flex-col items-start p-4">
                      <h1 className="opacity-50 text-sm">เกี่ยวกับฉัน</h1>
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
                    <motion.div whileHover={zoomIn} animate="animate">
                      <Image
                        src="/assets/logo.gif"
                        className="pointer-events-none "
                        width={126}
                        height={126}
                        alt="Petchx Panuphong Burakitphachai"
                      />
                    </motion.div>
                    <CardFooter className="justify-start flex-col items-start p-4">
                      <h1 className="opacity-50 text-sm">ผลงาน</h1>
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
          <Link href={"/services"}>
            <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
              <Card className="rounded-3xl h-full ">
                <CardBody className="justify-center items-center">
                  {/* <TbCode size={50} /> */}
                  {/* <TbDeviceMobileCode size={50} /> */}
                  <motion.div
                    className="flex h-[126px] items-center justify-center"
                    whileHover={zoomIn}
                    animate="animate"
                  >
                    <TbCode size={50} />
                    <TbDeviceMobileCode size={50} />

                    {/* <Image */}
                    {/*   src="/assets/logo.gif" */}
                    {/*   className="pointer-events-none " */}
                    {/*   width={126} */}
                    {/*   height={126} */}
                    {/*   alt="Petchx Panuphong Burakitphachai" */}
                    {/* /> */}
                  </motion.div>
                  <CardFooter className="justify-start flex-col items-start">
                    <h1 className="opacity-50 text-xs">บริการ</h1>
                    <h1 className="text-xl">Services</h1>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="col-span-2 lg:col-span-2 h-56 order-4 lg:order-5"
          variants={moveUp}
          initial="init"
          animate="end"
        >
          {/* <Link href={"/contact"}> */}
          <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
            <Card className="rounded-3xl h-full">
              <CardBody className="justify-center items-center">
                <div className="p-2 w-full">
                  <div className="h-28 rounded-3xl bg-secondary flex items-center justify-center text-primary gap-6 w-full">
                    <motion.div
                      aria-label="Petchxx"
                      onClick={() => {
                        router.push("https://github.com/petchxx");
                      }}
                      whileHover={zoomIn}
                    >
                      <div className="cursor-pointer rounded-full bg-content1 p-4 text-primary hover:bg-black hover:text-white">
                        <Icon icon="line-md:github-loop" fontSize={32} />
                      </div>
                    </motion.div>
                    <motion.div
                      aria-label="Petchxig"
                      onClick={() => {
                        router.push("https://www.instagram.com/petchxig");
                      }}
                    >
                      <motion.div
                        whileHover={zoomIn}
                        // className="cursor-pointer bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full  p-4 text-white"
                        className="p-4 bg-content1 rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white "
                      >
                        <Icon icon="line-md:instagram" fontSize={32} />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      aria-label="Petchx"
                      onClick={() => {
                        router.push(
                          "https://www.facebook.com/profile.php?id=61564234927089",
                        );
                      }}
                      whileHover={zoomIn}
                    >
                      <div
                        // className="cursor-pointer rounded-full bg-blue-500 p-4 text-white"
                        // className="p-4 bg-content1 rounded-full cursor-pointer"
                        className="p-4 bg-content1 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white "
                      >
                        <Icon icon="line-md:facebook" fontSize={32} />
                      </div>
                    </motion.div>
                    <motion.div
                      aria-label="petchxpanuphong@gmail.com"
                      onClick={() => {
                        router.push("mailto:petchxpanuphong@gmail.com");
                      }}
                      whileHover={zoomIn}
                    >
                      <div
                        // className="cursor-pointer rounded-full bg-[#06c755] p-4 text-white"
                        className="p-4 bg-content1 rounded-full cursor-pointer hover:bg-[#06c755] hover:text-white "
                      >
                        <Icon icon="ri:line-fill" fontSize={32} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <CardFooter className="justify-start flex-col items-start">
                  <h1 className="opacity-50 text-xs">STAY WITH ME</h1>
                  <h1 className="text-xl">Profiles</h1>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
          {/* </Link> */}
        </motion.div>

        <motion.div
          className="col-span-2 sm:col-span-1 h-56 order-6 "
          variants={moveUp}
          initial="init"
          animate="end"
        >
          {/* <Link href={"/contact"}> */}
          <div className="transition-transform h-full  duration-300 hover:scale-[1.02]">
            <Card
              className="rounded-3xl h-full"
              onClick={() => {
                router.push("/contact");
              }}
            >
              <CardBody className="justify-center items-center">
                <div className="x-2 w-full">
                  <div className="h-28 rounded-3xl bg-secondary flex items-center justify-center text-primary gap-4">
                    <ThemeSwitcher isSwitch={true} />
                    {/* <div */}
                    {/*   className="rounded-full bg-content1 p-5 hover:text-foreground" */}
                    {/*   onClick={(e) => { */}
                    {/*     e.preventDefault(); */}
                    {/*     router.push("mailto:petchxpanuphong@gmail.com"); */}
                    {/*   }} */}
                    {/* > */}
                    {/*   <FaEnvelope size={25} /> */}
                    {/* </div> */}
                    {/* <div */}
                    {/*   className="rounded-full bg-content1 p-5 hover:text-foreground" */}
                    {/*   onClick={(e) => { */}
                    {/*     e.preventDefault(); */}
                    {/*     router.push("https://lin.ee/1kSm3fq"); */}
                    {/*   }} */}
                    {/* > */}
                    {/*   <FaLine size={25} /> */}
                    {/* </div> */}
                  </div>
                </div>
                <CardFooter className="justify-start flex-col items-start">
                  <h1 className="opacity-50 text-xs">SWITCH THEMER</h1>
                  <h1 className="text-xl">Dark mode</h1>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
          {/* </Link> */}
        </motion.div>

        <motion.div
          className="col-span-2 0 h-80 order-7"
          variants={fadeIn}
          initial="init"
          animate="end"
          onClick={() => router.push("https://getclockin.app")}
        >
          <div className="cursor-pointer h-full relative group ">
            <div className="absolute w-full h-full bg-background/20 backdrop-blur-sm z-10 rounded-3xl group-hover:block hidden"></div>
            <h1 className="text-6xl absolute w-full h-full items-center justify-center z-10 font-bold group-hover:flex hidden text-[#f5a524] ">
              ClockIn
            </h1>
            <Card className=" rounded-3xl justify-center items-center h-full group p-2">
              <CardBody className="justify-center items-center overflow-hidden">
                <Image
                  src="/assets/clockin-light.png"
                  className="group-hover:scale-105 duration-300  transition-transform   pointer-events-none roun object-top dark:hidden block object-cover rounded-3xl"
                  fill={true}
                  alt="Petchx Panuphong Burakitphachai"
                />
                <Image
                  src="/assets/clockin-dark.png"
                  className="pointer-events-none object-top  group-hover:scale-105  duration-300  transition-transform   dark:block hidden object-cover rounded-3xl"
                  fill={true}
                  alt="Petchx Panuphong Burakitphachai"
                />
              </CardBody>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className=" col-span-2 h-80 order-8"
          variants={fadeIn}
          initial="init"
          animate="end"
          onClick={() => router.push("https://boostagram.dev")}
        >
          <div className="cursor-pointer h-full relative group ">
            <div className="absolute w-full h-full bg-background/20 backdrop-blur-sm z-10 rounded-3xl group-hover:block hidden"></div>
            <h1 className="text-6xl absolute w-full h-full items-center justify-center z-10 font-bold group-hover:flex hidden text-[#006fee] ">
              Boostagram
            </h1>
            <Card className=" rounded-3xl justify-center items-center h-full group p-2">
              <CardBody className="justify-center items-center ">
                <Image
                  src="/assets/boostagram-light.png"
                  className="pointer-events-none group-hover:scale-105 duration-300  transition-transform   object-top dark:hidden block object-cover rounded-3xl"
                  fill={true}
                  alt="Petchx Panuphong Burakitphachai"
                />
                <Image
                  src="/assets/boostagram-dark.png"
                  className="pointer-events-none object-top group-hover:scale-105 duration-300  transition-transform   dark:block hidden object-cover rounded-3xl"
                  fill={true}
                  alt="Petchx Panuphong Burakitphachai"
                />
              </CardBody>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
