import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import CopyrightIcon from "@mui/icons-material/Copyright";

import "./Footers.scss";

import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";

const Footers = ({ JSONData }: any) => {
  const { background_image, image_file_size, content } = JSONData;

  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  return (
    <Box
      className="footers-container"
      style={{ backgroundImage: `url(${background_image})`, ...heightRatio }}
    >
      <img className="header" src={content.header_image} alt="header" />
      <Button variant="contained">Join the Community</Button>
      <Stack direction="row" className="creator-panel">
        <img src={content.creator_info.thumbnail} alt="creator-thumbnail" />
        <Stack>
          <h1>{content.creator_info.header}</h1>
          <p>{content.creator_info.description}</p>
        </Stack>
      </Stack>
      <Stack className="followers-panel">
        <h1>Follow Us On</h1>
        <Stack direction="row">
          <img src={content.followers_icon.twitter} alt="twitter-icon" />
          <img src={content.followers_icon.instagram} alt="instagram-icon" />
          <img src={content.followers_icon.discord} alt="discord-icon" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footers;
