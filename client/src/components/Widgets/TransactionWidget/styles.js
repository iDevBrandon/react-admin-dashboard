import styled from "styled-components";

export const TransactionWidgetContainer = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 10px;

  @media screen and (min-width: 480px) {
    flex: 2;
  }
`;

export const TransactionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-spacing: 0.3rem;
`;

export const TransactionTr = styled.tr`
  text-align: left;
  margin-bottom: 3px;
`;

export const TransactionRecord = styled.td`
  display: flex;
  align-items: center;
`;

export const TransactionSymbolImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

export const TransactionDate = styled.td`
  display: none;
  @media screen and (min-width: 480px) {
    display: block;
  }
`;

export const TransactionButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  width: 100%;

  &.ordering {
    background-color: #e5faf2;
    color: #3bb077;
  }

  &.Processing {
    background-color: #fff0f1;
    color: #d95087;
  }

  &.Completed {
    background-color: #eeeef7;
    color: #2a7ade;
  }

  @media screen and (min-width: 480px) {
    width: 5rem;
  }
`;
