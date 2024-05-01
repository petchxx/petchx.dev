"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ContactPage({}: Props) {
  return (
    <main className="w-full flex-col flex justify-center items-center p-6">
      <motion.div
        initial={{ rotateX: -100, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        className="w-full max-w-xl"
      >
        <Card className="p-6 w-full mt-6">
          <CardHeader>
            {/* <p className="text-xl font-bold">Enter your information</p> */}
            <h1 className="text-5xl font-bold flex">Contact me 💬</h1>
          </CardHeader>
          <CardBody>
            <Input
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Textarea
              className="mt-4"
              label="Message"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Enter your message"
              minRows={4}
              rows={4}
            />
          </CardBody>
          <CardFooter>
            <Button className="w-full mb-4" color="primary" variant="shadow">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
}
