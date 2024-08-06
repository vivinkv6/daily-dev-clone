"use client";
import React from "react";
import FileNotFound from "/public/404.svg";
import InternalServerError from "/public/500.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ErrorProp = {
  error: Error & { digest?: string };
  reset: () => void;
};

type ErrorDetail = {
  id: number;
  url: string | StaticImport;
  status: 400 | 401 | 402 | 403 | 404 | 500;
};

const errorList: ErrorDetail[] = [
  {
    id: 1,
    url: FileNotFound,
    status: 404,
  },
  {
    id: 2,
    url: InternalServerError,
    status: 500,
  },
];

function Error({ error, reset }: ErrorProp) {
  // const findError=errorList.find((value)=>value.status==error.stack)
  return (
    <div className="flex justify-center items-center w-[100%] h-[100dvh] ">
      <div className="flex flex-col items-center">
        <Image
          src={errorList[0].url}
          width={500}
          height={500}
          alt={errorList[0].status.toString()}
        />
      </div>
    </div>
  );
}

export default Error;
