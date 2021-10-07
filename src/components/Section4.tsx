import React, { useState } from "react";

import Box from "@mui/material/Box";

import "./Section4.scss";
import Button from "@mui/material/Button";

import SimpleModal from "./overlayComponents/SimpleModal";
import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";

const Section4 = ({ JSONData }: any) => {
  const { background_image, image_file_size, content } = JSONData;

  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  const [openModal, setOpenModal] = useState(false);

  const toggleModalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box
      className="section-4-container"
      style={{ backgroundImage: `url(${background_image})`, ...heightRatio }}
    >
      <h1 className="sub-header">{content.top_header}</h1>
      <h1>{content.main_header}</h1>
      <h1 className="sub-header description">{content.description}</h1>

      <Button variant="contained" onClick={() => toggleModalHandler()}>
        Discover Us
      </Button>

      <SimpleModal
        modalMessage="Button Discover Us is under construction"
        openModal={openModal}
        toggleModalHandler={toggleModalHandler}
      />
    </Box>
  );
};

export default Section4;
