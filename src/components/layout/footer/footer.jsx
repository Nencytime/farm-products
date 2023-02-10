import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, FooterCopyright } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <FooterCopyright>Создано 2021</FooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
