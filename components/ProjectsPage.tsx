import Nav from "@/components/Nav";
import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/card";
import React from "react";
import Link from "next/link";

type Props = {};

export default function ProjectsPage({}: Props) {
  const projects = [
    {
      name: "ClockIn",
      description: "Employee Management Platform",
      url: "https://getclockin.com",
      color: "#f5a524",
    },
    {
      name: "VENUS",
      description: "Clinic Management Platform",
      color: "#3c61dd",
    },
    {
      name: "B3lletattoo",
      description: "Tattoo Studio Website",
      image: "/assets/b3lletattoo.png",
    },
  ];
  return (
    <main className="flex items-center flex-col ">
      <Nav index="projects" />
      <div className="p-6 max-w-screen-xl flex flex-col  items-center">
        <h1 className="mt-6 text-6xl font-bold">Projects</h1>
        <p className="mt-6 text-lg max-w-xl text-center">
          The following are some of the projects I have worked on. Some of them
          are personal projects and some are client projects.
        </p>

        <div className="flex flex-wrap mt-12 gap-6 justify-center">
          {projects.map((project, index) => (
            <Link
              href={project.url ?? ""}
              key={index}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <Card className="rounded-3xl p-4 items-center w-80 h-80 cursor-pointer">
                <div className="flex relative justify-center items-center w-full h-4/5 rounded-3xl">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="object-cover rounded-3xl"
                      fill={true}
                    />
                  ) : (
                    <p
                      className="text-4xl font-bold"
                      style={{ color: project.color }}
                    >
                      {project.name}
                    </p>
                  )}
                </div>
                <CardFooter>
                  <div>
                    <p className="opacity-60">{project.description}</p>
                    <p className="text-xl font-medium ">{project.name}</p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
