import React from "react";
import tw from "tailwind-styled-components";
import { Button as AntButton } from "antd";

const Button = ({ type, onClick, children }) => {
  return (
    <>
      <AntButton type={type} onClick={onClick}>
        {children}
      </AntButton>
    </>
  );
};

export default Button;
