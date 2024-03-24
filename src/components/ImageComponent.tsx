import React from "react";
import Image from "next/image";

const ImageComponent = ({ src }) => {
  console.log("src:", src);
  return <Image src={src} alt="test" />;
};

export default ImageComponent;
