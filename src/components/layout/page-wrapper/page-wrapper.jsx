import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { StyledSection } from "./styles";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <StyledSection>
        <Outlet />
      </StyledSection>
      <Footer />
    </>
  );
}

export default PageWrapper;
