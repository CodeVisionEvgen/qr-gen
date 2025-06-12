"use client";
import { useRouter } from "next/navigation";
import { Textarea } from "@heroui/input";
import { useState } from "react";
import { Button } from "@heroui/button";

import { title } from "@/components/primitives";
import { QrCodeIcon } from "@/components/icons";
export default function Home() {
  const router = useRouter();
  const [prompt, setPrompt] = useState<string>("");

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className=" w-max gap-10 grid">
        <div className="grid gap-2">
          <h1
            className={
              title({
                color: "green",
              }) + " !h-max p-2"
            }
          >
            QR code generator
          </h1>
          <Textarea
            classNames={{
              innerWrapper: "text-primary",
            }}
            color="success"
            label="Write a prompt..."
            value={prompt}
            variant="faded"
            onValueChange={(e) => {
              setPrompt(e);
            }}
          />
        </div>
        <Button
          className=" text-white font-bold text-xl"
          color="primary"
          startContent={
            <QrCodeIcon fill="currentColor" height={30} width={30} />
          }
          variant="shadow"
          onClick={() => {
            router.push(`/qr?prompt=${prompt}`);
          }}
        >
          Generate
        </Button>
      </div>
    </section>
  );
}
