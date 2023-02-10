import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import BenefitCard from "/src/components/ui/benefit-card/benefit-card";
import Button from "/src/components/ui/button/button";
import { BenefitItem, BenefitList, StyledBenefitsList } from "./styles";
import { AppRoute } from "/src/const";

function BenefitsList({ benefits }) {
  return (
    <StyledBenefitsList>
      {benefits?.length ? (
        <>
          <Title size={TitleSize.BIG}>Почему фермерские продукты лучше?</Title>
          <BenefitList $isGridList>
            {benefits.map((benefit) => (
              <BenefitItem key={benefit.id}>
                <BenefitCard {...benefit} />
              </BenefitItem>
            ))}
          </BenefitList>
          <Button minWidth={260} link={AppRoute.BUY}>
            Купить
          </Button>
        </>
      ) : null}
    </StyledBenefitsList>
  );
}

export default BenefitsList;
