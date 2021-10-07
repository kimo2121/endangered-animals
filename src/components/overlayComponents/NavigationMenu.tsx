import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import "./NavigationMenu.scss";

interface NavigateTypes {
  openMenu?: any;
  handleMenuClick?: any;
  anchorMenu?: any;
  menuItems?: any;
}
const NavigationMenu: React.FC<NavigateTypes> = ({
  openMenu,
  handleMenuClick,
  anchorMenu,
  menuItems,
}) => {
  return (
    <Menu
      className="navigation-menu"
      open={openMenu}
      anchorEl={anchorMenu}
      onClose={handleMenuClick}
      onClick={handleMenuClick}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div>
        {menuItems.sections &&
          menuItems.sections.map((item: any, index: any) => {
            return <MenuItem key={index}>{item}</MenuItem>;
          })}
      </div>
      <MenuItem>
        <menuItems.ConnectButton />
      </MenuItem>
    </Menu>
  );
};

export default NavigationMenu;
