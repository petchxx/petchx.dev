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
import React, { useState } from "react";

type Props = {};

export default function ContactPage({}: Props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    console.log(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL);
    fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: email,
            description: message,
            color: 9460479,
            footer: {
              icon_url: "https://petchx.dev/assets/logo.svg",
            },
            timestamp: new Date(),
          },
        ],
        attachments: [],
      }),
    }).then((res) => {
      if (res.status === 204) {
        alert("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message, please try again later.");
      }
    });
  };
  return (
    <main
      className="w-full flex-col flex justify-center items-center mt-20 p-6"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={{ rotateX: 100, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        className="w-full max-w-xl"
      >
        <Card className="p-6 w-full mt-6">
          <CardHeader>
            {/* <p className="text-xl font-bold">Enter your information</p> */}
            <h1 className="text-5xl font-bold flex">ส่งข้อความ 💬</h1>
          </CardHeader>
          <CardBody>
            <Input
              label="Email"
              labelPlacement="outside"
              placeholder="example@gmail.com"
              variant="bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              className="mt-4"
              label="ข้อความ"
              variant="bordered"
              labelPlacement="outside"
              placeholder="ฉันอยากได้เว็บไซต์..."
              minRows={4}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </CardBody>
          <CardFooter>
            <Button
              className="w-full mb-4"
              color="primary"
              onClick={async () => {
                await handleSubmit();
              }}
              variant="shadow"
            >
              ส่งข้อความ
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
}
