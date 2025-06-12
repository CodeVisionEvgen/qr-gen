import React from "react";
import { Spinner } from "@heroui/spinner";

export default function LoadComponent() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className=" flex justify-center bg-default-100 border-2 border-default-200 rounded-xl rounded p-2">
        <Spinner color="primary" />
      </div>
    </div>
  );
}
