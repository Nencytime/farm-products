import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledHeader = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  padding-top: 0;
  padding-bottom: 0;
  height: 79px;
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
`;
