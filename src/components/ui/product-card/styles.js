import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const StyledCard = styled.article`
  position: relative;
  display: flex;
  width: 727px;
  min-height: 288px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorWhite};
`;

export const Image = styled.img`
  width: 248px;
  object-fit: cover;
`;

export const Content = styled.div`
  margin-bottom: 0;
  padding-left: 20px;
  line-height: 21px;
`;

export const Tabs = styled.p`
  margin-top: 7px;
  margin-bottom: 14px;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.colorForPrice};
  bottom: 20px;
  padding: 0 8px;
  font-weight: 700;
  display: flex;
  width: max-content;
`;
