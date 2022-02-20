import React from "react";
import {
  Logo,
  NavbarEnd,
  NavbarHeader,
  NavbarIcon,
  NavbarIcons,
  NavbarWrapper,
  NotificationIcon,
  PortfolioIcon,
  TopIconBadge,
} from "./styles";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiUser, FiPieChart } from "react-icons/fi";
const Navbar = () => {
  return (
    <NavbarHeader>
      <NavbarWrapper>
        <div className="navbarStart">
          <Logo>OXINION Finance</Logo>
        </div>
        <NavbarEnd>
          <NavbarIcons>
            <NavbarIcon>
              <PortfolioIcon>
                <FiPieChart />
              </PortfolioIcon>
            </NavbarIcon>
            <NavbarIcon>
              <NotificationIcon>
                <IoNotificationsOutline />
                <TopIconBadge>2</TopIconBadge>
              </NotificationIcon>
            </NavbarIcon>
            <NavbarIcon>
              <FiUser />
            </NavbarIcon>
          </NavbarIcons>
        </NavbarEnd>
      </NavbarWrapper>
    </NavbarHeader>
  );
};

export default Navbar;
