import React, { useState } from "react";

import Box from "@mui/material/Box";

import "./Section3.scss";

import InformativeModal from "./overlayComponents/InformativeModal";
import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";

const Section3 = ({ JSONData }: any) => {
  const { background_image, content_categories, content, image_file_size } =
    JSONData;
  const { category_1, category_2, category_3 } = content_categories;

  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  const [selectedCategory, setSelectedCategory] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const toggleModalHandler = (categoryData: any) => {
    setOpenModal(!openModal);
    setSelectedCategory(categoryData);
  };

  return (
    <Box
      className="section-3-container"
      style={{ backgroundImage: `url(${background_image})`, ...heightRatio }}
    >
      <h1 className="sub-header">{content.top_header}</h1>
      <h1>{content.main_header}</h1>
      <h1 className="sub-header description">{content.description}</h1>

      <Box className="category-handler">
        <Box>
          <img src={category_1.image_url} alt="category-1" />
        </Box>
        <Box>
          <img src={category_2.image_url} alt="category-2" />
        </Box>
        <Box>
          <img src={category_3.image_url} alt="category-3" />
        </Box>
      </Box>

      <InformativeModal
        openModal={openModal}
        toggleModalHandler={toggleModalHandler}
        messageData={selectedCategory}
      />
    </Box>
  );
};

export default Section3;
