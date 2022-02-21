import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 1rem;
`;

export const HomeWidgets = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;
