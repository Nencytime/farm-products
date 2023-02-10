import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { AppRoute } from "/src/const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
