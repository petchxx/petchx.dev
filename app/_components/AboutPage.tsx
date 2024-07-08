"use client";

import React from "react";
import Nav from "./Nav";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";
import {
  TbBrandX,
  TbBrandThreads,
  TbBrandGithub,
  TbBrandInstagram,
} from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import info from "@/public/info.json";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function AboutPage({}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <main>
      <Nav index="about" />
      <div className="max-w-7xl justify-start md:flex mx-auto mt-4 p-4 gap-12">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween" }}
        >
          <Card className="rounded-3xl items-center gap-6 p-6 sticky top-32">
            <Skeleton
              className="rounded-3xl h-[320px] min-w-[320px]"
              isLoaded={imageLoaded}
            >
              <Image
                src="/assets/petchx2.png"
                className="pointer-events-none rounded-3xl"
                fill={true}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                alt="Petchx Logo"
              />
            </Skeleton>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl text-center">{info.fullname}</h1>
              <p className="opacity-50">{info.name}</p>
            </div>
            <div className="flex gap-4">
              <Link href={"https://github.com/petchxx"}>
                <div className="rounded-full bg-secondary p-4 hover:text-foreground text-primary">
                  <TbBrandGithub size={25} />
                </div>
              </Link>
              <Link href={"https://instagram.com/petchxig"}>
                <div className="rounded-full bg-secondary p-4 hover:text-foreground text-primary">
                  <TbBrandInstagram size={25} />
                </div>
              </Link>
              <Link href={"https://twitter.com/panuphongxtw"}>
                <div className="rounded-full bg-secondary p-4 hover:text-foreground text-primary">
                  <TbBrandX size={25} />
                </div>
              </Link>
              <Link href={"https://www.threads.net/@petchxig"}>
                <div className="rounded-full bg-secondary p-4 hover:text-foreground text-primary">
                  <TbBrandThreads size={25} />
                </div>
              </Link>
            </div>
            <Button
              color="primary"
              variant="ghost"
              className="w-80 mt-2"
              size="lg"
              as={Link}
              href="/contact"
            >
              Contact me
            </Button>
          </Card>
        </motion.div>

        <div className="max-w-2xl mt-10 px-2">
          <p className="text-2xl font-bold">About Me</p>
          <p className="mt-6">{info.about}</p>
          <p className="text-2xl font-bold mt-12">Experience</p>
          {info.experience.map((item, index) => (
            <div key={index} className="mt-6">
              <p className="opacity-50">{item.year}</p>
              <p className="text-primary text-lg">{item.work}</p>
              <p className="">{item.company}</p>
            </div>
          ))}
          <p className="text-2xl font-bold mt-12">Education</p>
          {info.education.map((item, index) => (
            <div key={index} className="mt-6">
              <p className="opacity-50">{item.year}</p>
              <p className="text-primary text-lg">{item.education}</p>
              <p className="">{item.name}</p>
            </div>
          ))}
          <p className="text-2xl font-bold mt-12">Skills</p>
          {info.skills.map((item, index) => (
            <div key={index} className="mt-6">
              <p className="opacity-50">{item.percent}</p>
              <p className="text-primary text-lg">{item.name}</p>
              <p className="">{item.description}</p>
            </div>
          ))}
          <p className="text-2xl font-bold mt-12">Awards</p>
          {info.awards.map((item, index) => (
            <div key={index} className="mt-6">
              <p className="opacity-50">{item.year}</p>
              <p className="text-primary text-lg">{item.name}</p>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
