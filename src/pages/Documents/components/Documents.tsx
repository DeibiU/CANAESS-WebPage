import React from "react";
import "../Documents.css";
import { Separator } from "../../Extras/components/Separator";

interface DocumentsProps {}

const Documents = ({}: DocumentsProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-9 py-7 w-screen">
      <h1 className="text-canaess-500 text-3xl font-bold pr-96">
        Documentos de Interés
      </h1>
      <div className="w-[50%] h-80 bg-gray-300">
        <Separator />
      </div>
    </div>
  );
};

export { Documents };
