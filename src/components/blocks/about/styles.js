import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 24px;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 183px;
  padding-bottom: 183px;
  padding-right: 603px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  align-items: center;
  z-index: 1;

  &::before {
    position: absolute;
    top: 37px;
    bottom: 0;
    background-color: ${(props) => props.theme.colorForAbout};
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 447px;
    border-radius: 50%;
    margin: auto;
  }

  &::after {
    z-index: 2;
    position: absolute;
    top: 37px;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 360px;
    margin: auto;
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  margin-top: 24px;
  padding-right: 122px;
`;
