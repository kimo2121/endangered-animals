import React, { useState, useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { windowSize } from "../constants";

import useWindowDimensions from "../customHooks/useWindowDimension";
import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";

import SimpleModal from "./overlayComponents/SimpleModal";

import "./Section7.scss";

const Section7 = ({ JSONData }: any) => {
  const { background_image, image_file_size, content } = JSONData;
  const { main_header, description, roadmap_list } = content;
  const roadmapKeys = Object.keys(roadmap_list);

  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const section7Element = useRef(null);

  const { width } = useWindowDimensions();
  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  const smallerWidth = windowSize.iconWidthSize >= width;

  const toggleModalHandler = (description: any) => {
    setOpenModal(!openModal);

    if (openModal) {
      setModalMessage("");
    } else {
      setModalMessage(description);
    }
  };

  // useEffect(() => {
  //     const script = document.createElement('script');
  //     const div = document.createElement('div');
  //
  //     script.src = "https://apps.elfsight.com/p/platform.js";
  //     script.async = true;
  //
  //     div.className = "elfsight-app-1d302b6c-44bd-4f27-ae77-19b0c3736c1b";
  //
  //     // section7Element.current.appendChild(div);
  //     // section7Element.current.appendChild(script);
  //     //
  //     // return () => {
  //     //     section7Element.current.removeChild(script);
  //     // }
  //
  //     // <div className="elfsight-app-1d302b6c-44bd-4f27-ae77-19b0c3736c1b">{}</div>
  //
  // }, []);

  return (
    <Box
      className="section-7-container"
      ref={section7Element}
      style={{
        backgroundImage: `url(${background_image})`,
        minHeight: heightRatio.height,
      }}
    >
      <h1>{main_header}</h1>
      <h1 className="sub-header description">{description}</h1>
      <Stack className="roadmap-list">
        {roadmap_list &&
          roadmapKeys.map((item, index) => {
            return (
              <span
                key={index}
                style={{ backgroundImage: `url(${roadmap_list[item].image})` }}
              >
                <p className={`title ${index % 2 === 0 ? "" : "even"}`}>
                  {roadmap_list[item].title}
                  {smallerWidth && (
                    <strong
                      onClick={() =>
                        toggleModalHandler(roadmap_list[item].description)
                      }
                    >
                      {" "}
                      see more...
                    </strong>
                  )}
                </p>
                <p
                  className={`${index % 2 === 0 ? "" : "even"} ${
                    smallerWidth ? "hidden" : ""
                  }`}
                >
                  {roadmap_list[item].description}
                </p>
              </span>
            );
          })}
      </Stack>
      <h1 className="second-header">{content.gallery.title}</h1>
      <Box className="gallery-thumbnails">
        {content.gallery.frogs &&
          content.gallery.frogs.map((item: any, index: any) => {
            return (
              <img key={index} src={item} alt={`frog-thumbnail-${index}`} />
            );
          })}
      </Box>
      <SimpleModal
        modalMessage={modalMessage}
        toggleModalHandler={toggleModalHandler}
        openModal={openModal}
      />
    </Box>
  );
};

export default Section7;
