import React from "react";
import styled from "styled-components";
import ScrollArticle from "../styled/ScrollArticle";

import Experience from "./Experience";

export type ExperienceInfo = {
  company: string;
  position: string;
  backgroundImageLink: string;
  timeline: string;
};

const ExperiencePage = () => {
  const huskyExperience: ExperienceInfo = {
    company: "Husky Energy",
    position: "Software Development Co-op Student",
    backgroundImageLink:
      "https://www.nai-group.com/wp-content/uploads/2020/03/shutterstock_680239339-scaled.jpg",
    timeline: "September 2020 - Present",
  };

  return (
    <ScrollArticle>
      <Experience {...huskyExperience} />
    </ScrollArticle>
  );
};

export default ExperiencePage;
