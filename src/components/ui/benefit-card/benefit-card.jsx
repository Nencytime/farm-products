import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Text, Figure, HeaderWrapper, Mark, Image, StyledCard } from "./styles";

function BenefitCard({ title, about, feature, image, isNegative }) {
  return (
    <StyledCard isNegative={isNegative}>
      <Figure>
        <Image src={image} width={56} height={56} alt="title" />
        <HeaderWrapper>
          <Mark isNegative={isNegative}>{feature}</Mark>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </HeaderWrapper>
      </Figure>
      <Text>{about}</Text>
    </StyledCard>
  );
}

export default BenefitCard;
