import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import useCalculateHeightRatio from "../customHooks/useCalculateHeightRatio";

import "./Section6.scss";

const Section6 = ({ JSONData }: any) => {
  const { background_image, image_file_size, qa_section } = JSONData;
  const qa_section_keys = Object.keys(qa_section);

  const { heightRatio } = useCalculateHeightRatio({
    sectionImageHeight: image_file_size,
  });

  const StringLink = ({ answerList }: any) => {
    return (
      <p>
        {answerList.answer} <a href={answerList.link}>{answerList.link}</a>{" "}
        {answerList.answer_2}
      </p>
    );
  };

  return (
    <Box
      className="section-6-container"
      style={{
        backgroundImage: `url(${background_image})`,
        minHeight: heightRatio.height,
      }}
    >
      {qa_section &&
        qa_section_keys.map((item, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                {qa_section[item].question}
              </AccordionSummary>
              <AccordionDetails>
                {qa_section[item].answer ? (
                  qa_section[item].answer
                ) : (
                  <StringLink answerList={qa_section[item].answer_list} />
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </Box>
  );
};

export default Section6;
