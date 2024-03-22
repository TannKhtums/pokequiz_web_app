import React from "react";
import Image from "next/image";
import Link from "next/link";
import PokeQuizImage from "../../public/Icons/pokequiz.png";
import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImageContainer>
        <Link href="/">
          <Image src={PokeQuizImage} alt="Pokemon" width={3300} height={1350} />
        </Link>
      </HeaderImageContainer>
    </StyledHeader>
  );
};

const StyledHeader = tw.div`
  fixed 
  top-0
  px-0
  text-center
  bg-red-600
  m-auto
  w-full`;

const HeaderImageContainer = tw.div`
    py-6
    px-2
    w-[200px]
    h-auto
`;

export default Header;
