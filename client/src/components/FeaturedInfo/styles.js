import styled from "styled-components";

export const Featured = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FeaturedItem = styled.div`
  flex: 1;
  /* margin: 0px 20px;
  padding: 30px; */
  border-radius: 10px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: inherit;

  @media screen and (min-width: 480px) {
    /* margin: 0px 20px; */
    padding: 1rem;
  }
`;

export const FeaturedItemTitle = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

export const FeaturedMoneyRate = styled.span`
  align-items: center;

  color: red;
`;
