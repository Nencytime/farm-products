import styled from "styled-components";

export const StyledCard = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForNegativeLight
      : props.theme.colorForPositiveLight};
  box-sizing: border-box;
`;

export const Figure = styled.figure`
  display: flex;
  margin: 0;
  margin-bottom: 10px;
`;

export const HeaderWrapper = styled.div`
  margin-top: 0;
  margin-left: 20px;
`;

export const Mark = styled.p`
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForNegativeDark
      : props.theme.colorForPositiveDark};
  color: ${(props) => props.theme.colorWhite};
  margin: 0;
  margin-bottom: 4px;
  text-align: center;
  font-size: 14px;
  width: max-content;
  padding: 2px 10px;
`;

export const Image = styled.img`
  width: 56px;
  height: 100%;
  object-fit: contain;
`;

export const Text = styled.p`
  margin: 0;
`;
