import { Link } from '@nextui-org/react'
import React from 'react'
import { Image } from "@nextui-org/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.svg"
        className="block pointer-events-none"
        width={64}
        height={64}
        alt="Petchx Panuphong Burakitphachai"
      />
      <p className="text-2xl font-bold text-foreground">Petchx</p>
    </Link>

  )
}
