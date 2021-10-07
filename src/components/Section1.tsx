import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Section1.scss";

import SimpleModal from "./overlayComponents/SimpleModal";
import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";
import Mint from "./Mint/Mint";

const Section1 = ({ JSONData }: any) => {
  const { background_image, image_file_size, content } = JSONData;
  const { sub_headers, currentValue, totalValue, logo } = content;

  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  const [openModal, setOpenModal] = useState(false);

  const toggleModalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box
      className="section-1-container"
      style={{ backgroundImage: `url(${background_image})`, ...heightRatio }}
    >
      <img
        src={logo.image}
        alt="section-logo"
        style={{ maxHeight: logo.size.height, maxWidth: logo.size.width }}
      />
      <Box className="group-info">
        <h1 className="main-header">NFTs To Save Endangered Animals</h1>
        <h1 className="sub-header">{sub_headers}</h1>
        <Mint />
        <h1 className="sub-header">
          {currentValue} of {totalValue} Available
        </h1>
      </Box>
      <SimpleModal
        modalMessage="Button Save the Flying Frogs is under construction"
        openModal={openModal}
        toggleModalHandler={toggleModalHandler}
      />
    </Box>
  );
};

export default Section1;
