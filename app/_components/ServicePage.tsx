"use client";
import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { Card, CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";
import {
  TbCode,
  TbDeviceDesktopCode,
  TbDeviceMobileCode,
  TbWorldCode,
} from "react-icons/tb";

export default function ServicePage() {
  const services = [
    {
      name: "Landing Pages Website",
      description: "Start from 2,400 ฿ - 6,000 ฿",
      url: "https://lin.ee/1kSm3fq",
      color: "#f5a524",
    },
    {
      name: "Functional Websites",
      description: "Start from 6,000 ฿++",
      color: "#3c61dd",
      url: "https://lin.ee/1kSm3fq",
    },
  ];
  return (
    <main className="flex items-center flex-col ">
      <Nav index="services" />
      <div className="p-6 mt-20 max-w-screen-xl flex flex-col  items-center">
        <h1 className="mt-6 text-6xl font-bold flex">Services</h1>
        <p className="mt-6 text-lg max-w-xl text-center">
          The following are some of the services I provide.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween" }}
          className="flex flex-wrap mt-12 gap-6 justify-center"
        >
          {services.map((service, index) => (
            <Link
              href={service.url ?? ""}
              key={index}
              className="hover:scale-[1.02] hover:border-primary border-transparent border-4 shadow-md  rounded-3xl transition-transform duration-300"
            >
              <Card className="rounded-3xl p-4 items-center w-80 h-80 cursor-pointer">
                <div className="flex relative justify-center items-center w-full h-4/5 rounded-3xl">
                  <TbDeviceDesktopCode size={100} />
                </div>
                <CardFooter>
                  <div>
                    <p className="opacity-60">{service.description}</p>
                    <p className="text-xl font-medium ">{service.name}</p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
