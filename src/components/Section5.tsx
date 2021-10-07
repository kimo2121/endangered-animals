import React from "react";

import Box from "@mui/material/Box";

import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";

import "./Section5.scss";

const Section5 = ({ JSONData }: any) => {
  const { background_image, image_file_size, content, sub_image, variants } =
    JSONData;
  const variantsKeys = Object.keys(variants);

  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  return (
    <Box
      className="section-5-container"
      style={{ backgroundImage: `url(${background_image})`, ...heightRatio }}
    >
      <Box className="left-panel">
        <h1>{content.main_header}</h1>
        <h1 className="sub-header description">{content.description}</h1>
      </Box>
      <Box
        className="right-panel"
        style={{ backgroundImage: `url(${sub_image.image})` }}
      >
        <Box>
          {variantsKeys &&
            variantsKeys.map((item, index) => {
              return (
                <span
                  key={index}
                  className={`${index % 2 === 0 ? "" : "even"}`}
                >
                  <p>{variants[item].count}</p>
                  <p>{variants[item].label}</p>
                </span>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Section5;
