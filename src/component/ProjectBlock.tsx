import React from "react";
import Image from "next/image";
import type { StaticImageData as imageImport } from "next/image";

interface blockProps {
  image: string | imageImport;
  title: string;
  description: string;
  link?: string;
}

const ProjectBlock = (props: blockProps) => {
  return (
    <>
      <div className="w-80 h-80 bg-blue-400 relative">
        {!!props.image && (
          <Image
            className="z-0"
            src={props.image}
            alt="images"
            layout="fill"
            objectFit="cover"
          />
        )}
        <div className="w-80 h-80 bg-black text-inherit opacity-0 hover:opacity-70 duration-500">
          <a href="https://www.google.com">
            <div className="w-full h-full grid place-items-center">
              <p className="z-10 text-white text-xl font-semibold">
                POPUP TITLE!
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectBlock;
