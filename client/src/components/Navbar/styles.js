import styled from "styled-components";

export const NavbarHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: white;
  z-index: 1;
  position: fixed;
`;

export const NavbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
`;

export const NavbarStart = styled.div``;

export const Logo = styled.span`
  font-weight: bold;
  color: darkblue;
  cursor: pointer;
`;

export const NavbarIcon = styled.div`
  cursor: pointer;
  margin: 0.3rem;
`;

export const PortfolioIcon = styled.div`
  font-size: 1.3rem;
`;

export const NotificationIcon = styled.div`
  position: relative;
`;

export const TopIconBadge = styled.span`
  background-color: red;
  position: absolute;
  top: -5px;
  right: 1px;
  font-size: 0.8rem;
  color: white;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarEnd = styled.div``;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
`;
