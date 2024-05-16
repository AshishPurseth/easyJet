import styled, { css } from "styled-components";

const Box = css`
  height: -webkit-fill-available;
  display: grid;
  align-items: center;
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: 3.15rem;
  grid-template-columns: 10rem repeat(2, 1fr);
  align-items: center;
  background: url("../../src/assets/header.gif");
  background-repeat: no-repeat;
  box-shadow: 0 3px 5px 1px #444;
  padding: 0 1rem;
  cursor: pointer;
  position: relative;

  & main:nth-child(2) {
    justify-content: start;
    & section {
      ${Box}
    }
    & section:hover {
      background-color: #000000;
    }
  }
  & main:nth-child(3) {
    justify-content: end;
    & section {
      ${Box}
    }
  }
`;

export const StyledHeaderLogo = styled.section`
  height: 1.55rem;
  background: url("../../src/assets/easyJetHeaderLogo.png");
  background-repeat: no-repeat;
`;

export const StyledHeaderMenu = styled.main`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: inherit;
  grid-column-gap: 1rem;
  color: #fff;
  font-family: system-ui;
  font-weight: 600;
`;
