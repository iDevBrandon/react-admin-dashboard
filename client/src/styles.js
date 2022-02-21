import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  display: block;
  flex: 1;
  height: 100%;
  min-height: 100vh;
  margin-top: 50px;
  right: 0;
  bottom: 0;

  background: #ffffff;
  position: absolute;
  top: 0;
  width: 100%;

  /* width: 100%; */

  @media screen and (min-width: 480px) {
    left: 208px;
    width: unset;
  }
`;
