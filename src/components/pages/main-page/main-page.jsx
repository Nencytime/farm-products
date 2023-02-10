import React from "react";
import About from "/src/components/blocks/about/about";
import BenefitsList from "/src/components/blocks/benefits-list/benefits-list";
import { TitleSize } from "/src/components/ui/title/title";

function MainPage({ benefits }) {
  return (
    <>
      <About size={TitleSize.BIG} />
      <BenefitsList benefits={benefits} size={TitleSize.MIDDLE} />
    </>
  );
}

export default MainPage;
