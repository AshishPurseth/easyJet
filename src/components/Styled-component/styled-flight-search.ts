/** @format */

import styled, { css } from "styled-components";

const bottomText = css`
  display: grid;
  background: none;
  border: none;
  color: #f60;
  cursor: pointer;
  font-size: 0.9rem;
`;
const centerAlign = css`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
`;

const listIcon = css`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #f60;
`;

export const StyledSmallBox = styled.main`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccc;
`;

export const StyledThinLine = styled.span`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #ccc;
`;

export const StyledFlightSearchContainer = styled.main`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: calc(100vh - 5rem);
  background-color: #ff6600;
  align-items: center;
  justify-items: center;
`;

export const StyledFlightSearchCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 5rem;
  grid-template-rows: repeat(12, 1fr);
  grid-row-gap: 0.35rem;
  grid-column-gap: 0.25rem;
  height: 35rem;
  width: 25rem;
  background-color: #fff;
  padding: 0 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 4;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0.15rem;
    background-color: #ff6600;

    & > button {
      border: 0;
      background-color: #fff;
      letter-spacing: 0.12rem;
      font-weight: 500;
    }
  }
  & > div:nth-child(2) {
    grid-area: 2 / 1 / 3 / 4;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    grid-column-gap: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
  & div:nth-child(3) {
    grid-area: 3 / 1 / 5 / 3;
    border: 1px solid #ccc;
    border: 1px solid #ccc;
    display: grid;
    align-items: center;
    padding: 0 0.5rem;

    & > section {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: start;
      grid-column-gap: 1rem;
      font-weight: 500;
    }
  }
  & div:nth-child(4) {
    grid-area: 3 / 3 / 4 / 4;
    ${listIcon}
  }
  & div:nth-child(5) {
    grid-area: 4 / 3 / 5 / 4;
    ${listIcon}
  }
  & div:nth-child(6) {
    grid-area: 5 / 1 / 7 / 3;
    border: 1px solid #ccc;
    display: grid;
    align-items: center;
    padding: 0 0.5rem;

    & > section {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: start;
      grid-column-gap: 1rem;
      color: #ff6600;
      font-weight: 500;
    }
  }
  & div:nth-child(7) {
    display: grid;
    align-items: center;
    grid-area: 7 / 1 / 10 / 3;

    & > main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;

      & section:nth-child(2) {
        display: grid;
        grid-auto-flow: column;
        justify-content: end;
        grid-column-gap: 1.5rem;
        align-items: center;
        font-size: 1.5rem;
      }
    }
  }
  & div:nth-child(8) {
    grid-area: 10 / 1 / 11 / 4;

    & button {
      ${centerAlign}
      width: 100%;
      font-weight: 700;
      box-sizing: border-box;
      border: none;
      color: #fff;
      background-color: #f60;
      padding: 10px 0;
      white-space: normal;
      font-size: 14px;
      line-height: 14px;
      text-decoration: none;
      text-align: center;
    }
  }
  & div:nth-child(9) {
    align-items: center;
    grid-area: 11 / 1 / 12 / 3;
    justify-content: start;
    grid-auto-flow: column;
    ${bottomText}
  }
  & div:nth-child(10) {
    align-items: start;
    grid-area: 12 / 1 / 13 / 3;
    justify-content: start;
    grid-auto-flow: column;
    ${bottomText}
  }
`;
