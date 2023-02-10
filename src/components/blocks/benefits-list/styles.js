import styled from "styled-components";
import { Li, Section, Ul } from "/src/components/styled";

export const StyledBenefitsList = styled(Section)`
  position: relative;
  display: flex;
  padding-right: 90px;
  padding-left: 90px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;

export const BenefitList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 64px;
  margin-left: -20px;
`;

export const BenefitItem = styled(Li)`
  text-align: left;
  overflow: hidden;
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  vertical-align: top;
`;
