import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import { Image, StyledCard, ProductTitle, Content, Price } from "./styles";
import Options from "/src/components/ui/product-card/options/options";
import Tabs from "/src/components/ui/product-card/tabs/tabs";

function ProductCard({ product }) {
  const tabsList = [
    {
      title: "Описание",
      content: [
        product.description,
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      ]
    },
    {
      title: "Характеристики",
      content: <Options list={product.feature} />
    },
    {
      title: "Свойства",
      content: <Options list={product.properties} />
    }
  ];
  return (
    <StyledCard>
      <Image src={product.image} width={248} height={248} alt={product.title} />
      <Content>
        <ProductTitle size={TitleSize.SMALL}>{product.title}</ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
      </Content>
    </StyledCard>
  );
}

export default ProductCard;
