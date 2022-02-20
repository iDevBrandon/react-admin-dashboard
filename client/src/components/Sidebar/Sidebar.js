import React from "react";
import {
  SidebarContainer,
  SidebarIcon,
  SidebarList,
  SidebarListItem,
  SidebarMenu,
  SidebarWrapper,
} from "./styles";
import { BsFillBarChartFill, BsNewspaper } from "react-icons/bs";
import { RiExchangeFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoWallet } from "react-icons/io5";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarList>
            <SidebarListItem>
              <SidebarIcon>
                <BsFillBarChartFill />
              </SidebarIcon>
              Dashboard
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <RiExchangeFill />
              </SidebarIcon>
              Buy/Sell
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <BsNewspaper />
              </SidebarIcon>
              News
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <RiMoneyDollarCircleLine />
              </SidebarIcon>
              Dividends
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <IoWallet />
              </SidebarIcon>
              Transcations
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <IoMdSettings />
              </SidebarIcon>
              Setting
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
