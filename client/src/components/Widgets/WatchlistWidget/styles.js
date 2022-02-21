import styled from "styled-components";

export const WatchlistContainer = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 10px;
  margin-bottom: 1rem;

  @media screen and (min-width: 480px) {
    flex: 1;
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
`;
