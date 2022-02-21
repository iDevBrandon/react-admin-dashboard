import React from "react";
import {
  WatchList,
  WatchListButton,
  WatchlistContainer,
  WatchListItem,
  WatchListItemImg,
  WatchListItemInfo,
  WatchListItemSector,
  WatchListItemTitle,
  WatchlistTitle,
} from "./styles";
import { AiFillEye } from "react-icons/ai";

const WatchlistWidget = () => {
  return (
    <WatchlistContainer>
      <WatchlistTitle>Watchlist</WatchlistTitle>
      <WatchList>
        <WatchListItem>
          <WatchListItemImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
            alt="Apple logo"
          />
          <WatchListItemInfo>
            <WatchListItemTitle>Apple</WatchListItemTitle>
            <WatchListItemSector>Technology</WatchListItemSector>
          </WatchListItemInfo>
          <WatchListButton>
            <AiFillEye /> Detail
          </WatchListButton>
        </WatchListItem>
        <WatchListItem>
          <WatchListItemImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
            alt="Apple logo"
          />
          <WatchListItemInfo>
            <WatchListItemTitle>Apple</WatchListItemTitle>
            <WatchListItemSector>Technology</WatchListItemSector>
          </WatchListItemInfo>
          <WatchListButton>
            <AiFillEye /> Detail
          </WatchListButton>
        </WatchListItem>
        <WatchListItem>
          <WatchListItemImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
            alt="Apple logo"
          />
          <WatchListItemInfo>
            <WatchListItemTitle>Apple</WatchListItemTitle>
            <WatchListItemSector>Technology</WatchListItemSector>
          </WatchListItemInfo>
          <WatchListButton>
            <AiFillEye /> Detail
          </WatchListButton>
        </WatchListItem>
        <WatchListItem>
          <WatchListItemImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
            alt="Apple logo"
          />
          <WatchListItemInfo>
            <WatchListItemTitle>Apple</WatchListItemTitle>
            <WatchListItemSector>Technology</WatchListItemSector>
          </WatchListItemInfo>
          <WatchListButton>
            <AiFillEye /> Detail
          </WatchListButton>
        </WatchListItem>
        <WatchListItem>
          <WatchListItemImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
            alt="Apple logo"
          />
          <WatchListItemInfo>
            <WatchListItemTitle>Apple</WatchListItemTitle>
            <WatchListItemSector>Technology</WatchListItemSector>
          </WatchListItemInfo>
          <WatchListButton>
            <AiFillEye /> Detail
          </WatchListButton>
        </WatchListItem>
      </WatchList>
    </WatchlistContainer>
  );
};

export default WatchlistWidget;
