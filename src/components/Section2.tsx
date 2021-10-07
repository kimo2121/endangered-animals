import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./Section2.scss";

import SimpleModal from "./overlayComponents/SimpleModal";
import useWindowDimensions from "../customHooks/useWindowDimension";
import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";

import { windowSize } from "../constants";

const Section2 = ({ JSONData }: any) => {
  const { background_image, image_file_size, content, thumbnails } = JSONData;

  const { width } = useWindowDimensions();
  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  const [openModal, setOpenModal] = useState(false);
  const [thumbnailList, setThumbnailList] = useState([]);

  const toggleModalHandler = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    setThumbnailList(
      thumbnails.map((item: any, index: any) => {
        return (
          <Box key={index}>
            <img src={item.image} alt={item.label} />
            <p>{item.label}</p>
          </Box>
        );
      })
    );
  }, []);

  return (
    <Box
      className="section-2-container"
      style={{ backgroundImage: `url(${background_image})`, ...heightRatio }}
    >
      <h1 className="sub-header">{content.top_header}</h1>
      <h1>{content.main_header}</h1>
      <h1 className="sub-header description">{content.description}</h1>

      <Box className="carousel-handler">
        <AliceCarousel
          items={thumbnailList}
          paddingLeft={10}
          paddingRight={10}
          autoPlayInterval={2000}
          autoHeight
          autoWidth
          infinite
          autoPlay
          disableDotsControls={width <= windowSize.smallWidthSize}
        />
      </Box>

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

export default Section2;
