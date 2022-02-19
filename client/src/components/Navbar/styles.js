import styles from "styled-components";

export const NavbarHeader = styles.header`
    width: 100%;
    height: 50px;
    background-color: white;
`;

export const NavbarWrapper = styles.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
`;

export const NavbarStart = styles.div`
`;

export const Logo = styles.span`
    font-weight: bold;
    color: darkblue;
    cursor: pointer; 
`;

export const NavbarIcon = styles.div`
    cursor: pointer;
`;

export const NotificationIcon = styles.div`
    position: relative;
`;

export const TopIconBadge = styles.span`
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

export const NavbarEnd = styles.div`
`;

export const NavbarIcons = styles.div`
    display: flex;
    align-items: center;
`;
