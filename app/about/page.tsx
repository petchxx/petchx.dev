import React from 'react'
import Nav from '../components/Nav'
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { TbBrandX, TbBrandThreads, TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import info from '../info.json'

export default function About() {
    return (
        <main>
            <Nav index='about' />
            <div className="max-w-7xl justify-start md:flex mx-auto mt-4 p-4 gap-12">
                <div className=''>
                    <Card className='rounded-3xl items-center gap-6 p-6 sticky top-32'>
                        <Image
                            src="/assets/petchx2.png"
                            className="rounded-3xl pointer-events-none"
                            width={320}
                            height={320}
                            alt="Petchx Logo"
                        />
                        <div className="flex flex-col items-center">
                            <h1 className='text-2xl text-center'>{info.fullname}</h1>
                            <p className='opacity-50'>{info.name}</p>
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
                        <Button color='primary' variant="ghost" className='w-80 mt-2' size='lg' as={Link} href='/contact'>
                            Contact me
                        </Button>
                    </Card>
                </div>

                <div className="max-w-2xl mt-10 px-2">
                    <p className='text-2xl font-bold'>About Me</p>
                    <p className='mt-6'>{info.about}</p>
                    <p className='text-2xl font-bold mt-12'>Experience</p>
                    {
                        info.experience.map((item, index) => (
                            <div key={index} className="mt-6">
                                <p className='opacity-50'>{item.year}</p>
                                <p className='text-primary text-lg'>{item.work}</p>
                                <p className=''>{item.company}</p>
                            </div>
                        ))
                    }
                    <p className='text-2xl font-bold mt-12'>Education</p>
                    {
                        info.education.map((item, index) => (
                            <div key={index} className="mt-6">
                                <p className='opacity-50'>{item.year}</p>
                                <p className='text-primary text-lg'>{item.education}</p>
                                <p className=''>{item.name}</p>
                            </div>
                        ))
                    }
                    <p className='text-2xl font-bold mt-12'>Skills</p>
                    {
                        info.skills.map((item, index) => (
                            <div key={index} className="mt-6">
                                <p className='opacity-50'>{item.percent}</p>
                                <p className='text-primary text-lg'>{item.name}</p>
                                <p className=''>{item.description}</p>
                            </div>
                        ))
                    }
                    <p className='text-2xl font-bold mt-12'>Awards</p>
                    {
                        info.awards.map((item, index) => (
                            <div key={index} className="mt-6">
                                <p className='opacity-50'>{item.year}</p>
                                <p className='text-primary text-lg'>{item.name}</p>
                                <p className=''>{item.description}</p>
                            </div>
                        ))
                    }
                </div>


            </div>

        </main>
    )
}
