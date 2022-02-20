import styled from "styled-components";

export const SidebarContainer = styled.aside`
  flex: 1;
  background-color: #f6f7fb;
  height: 100vh;

  position: fixed;
  /* top: 0; */
  overflow-x: hidden;
  top: 50px;
`;

export const SidebarWrapper = styled.div``;

export const SidebarMenu = styled.div``;

export const SidebarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SidebarListItem = styled.li`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: rgb(240, 240, 245);
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 3px;
`;
