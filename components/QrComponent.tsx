"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import * as QRCode from "qrcode";
import { Button, ButtonGroup } from "@heroui/button";

import { CopyIcon, DownloadIcon, RegenerateIcon } from "./icons";
export default function QrComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (!searchParams.get("prompt")) {
      return router.replace("/");
    }
    const canvas = canvasRef.current as HTMLCanvasElement | undefined;

    if (canvas) {
      const context = canvas.getContext("2d");
      const image = new Image();

      if (context) {
        QRCode.toCanvas(
          canvasRef.current,
          searchParams.get("prompt") as string,
        );
        image.onload = () => {
          context.drawImage(image, 0, 0);
        };
      }
    }
  }, []);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow((prev) => !prev);
      }, 3000);
    }
  }, [show]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-max grid justify-center gap-2 justify-items-center">
        <canvas ref={canvasRef} className=" rounded" />
        <ButtonGroup className="mt-1">
          <Button
            color="primary"
            startContent={<DownloadIcon fill="currentColor" />}
            variant="flat"
            onClick={() => {
              if (canvasRef.current) {
                const image = canvasRef.current.toDataURL("image/png");
                const link = document.createElement("a");

                link.href = image;
                link.download = "qr-code.png";
                link.click();
              }
            }}
          >
            Download
          </Button>
          <Button
            color="secondary"
            startContent={<CopyIcon fill="currentColor" />}
            variant="flat"
            onClick={() => {
              canvasRef.current?.toBlob(async (blob) => {
                await navigator.clipboard.write([
                  new ClipboardItem({
                    // @ts-expect-error
                    "image/png": blob,
                  }),
                ]);
                setShow(true);
              });
            }}
          >
            Copy
          </Button>
        </ButtonGroup>
        <Button
          className="mt-2 w-full"
          startContent={<RegenerateIcon fill="currentColor" />}
          onClick={() => {
            router.push("/");
          }}
        >
          Regenerate
        </Button>
      </div>
      <div className=" absolute bottom-10 left-0">
        <span className="w-screen flex justify-end p-5">
          {show ? (
            <div className="bg-success flex gap-1 text-default-50 p-2 rounded">
              <CopyIcon fill="currentColor" />
              Copied to clipboard
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
    </section>
  );
}
