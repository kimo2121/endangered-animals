import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";

import MenuIcon from "@mui/icons-material/Menu";

import "./Headers.scss";

import { windowSize } from "../constants";
import useWindowDimensions from "../customHooks/useWindowDimension";
import NavigationMenu from "./overlayComponents/NavigationMenu";
import SimpleModal from "./overlayComponents/SimpleModal";

const Headers = ({ JSONData }: any) => {
  const { logo_image, sections, title } = JSONData;
  const { width } = useWindowDimensions();

  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorMenu, setAnchorMenu] = useState(null);

  const ConnectButton = () => {
    return (
      <WalletMultiButton
        className={`connect-button ${
          width <= windowSize.iconWidthSize ? "hide-nav-button" : ""
        }`}
        variant="contained"
      >
        Connect
      </WalletMultiButton>
    );
  };

  const NavigationText = () => {
    return (
      <Box
        className={`nav-group ${
          width <= windowSize.iconWidthSize ? "hide-text-nav" : ""
        }`}
      >
        {sections &&
          sections.map((item: any, index: any) => {
            return (
              <Box
                key={index}
                className={`nav-item ${item.length > 10 && "extra-grow"}`}
              >
                {width > windowSize.smallWidthSize ? (
                  <h1 className="sub-header">{item}</h1>
                ) : (
                  <Tooltip
                    title={item}
                    placement="right"
                    TransitionComponent={Zoom}
                    leaveDelay={200}
                    arrow
                  >
                    <h1 className="sub-header">{item.slice(0, 5)}</h1>
                  </Tooltip>
                )}
              </Box>
            );
          })}
      </Box>
    );
  };

  const toggleModalHandler = () => {
    setOpenModal(!openModal);
  };

  const toggleMenuHandler = (event: any) => {
    setOpenMenu(!openMenu);

    if (openMenu) {
      setAnchorMenu(null);
    } else {
      setAnchorMenu(event.currentTarget);
    }
  };

  return (
    <Box className="headers-container">
      <img className="header-img-logo" src={logo_image} alt={title} />

      <NavigationText />

      <ConnectButton />

      <Fab
        className={`nav-icon-button ${
          width <= windowSize.iconWidthSize ? "" : "hide-nav-icon"
        }`}
        variant="extended"
        onClick={(event) => toggleMenuHandler(event)}
      >
        <MenuIcon />
        Menu
      </Fab>

      <SimpleModal
        modalMessage="Button Connect is under construction"
        openModal={openModal}
        toggleModalHandler={toggleModalHandler}
      />

      <NavigationMenu
        // className="header-menu"
        openMenu={openMenu}
        anchorMenu={anchorMenu}
        handleMenuClick={toggleMenuHandler}
        menuItems={{ ConnectButton, sections }}
      />
    </Box>
  );
};

export default Headers;
