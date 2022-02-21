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

export const WatchListItemImg = styled.img`
  height: 40px;
  object-fit: cover;
`;

export const WatchlistTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const WatchList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WatchListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const WatchListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WatchListItemTitle = styled.span`
  font-weight: 600;
`;

export const WatchListItemSector = styled.span`
  font-weight: 200;
  color: grey;
`;

export const WatchListButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  padding: 0.5rem;
  background-color: #eeeef7;
  color: #555;
`;
