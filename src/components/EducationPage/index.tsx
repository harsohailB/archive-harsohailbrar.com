import React from "react";
import styled from "styled-components";
import ScrollArticle from "../styled/ScrollArticle";
import Education from "./Education";

type Degree = {
  school: string;
  degree: string;
};

export type EducationInfo = {
  university: string;
  degrees: Degree[];
  backgroundImageLink: string;
};

const EducationPage = () => {
  const engineeringInfo: EducationInfo = {
    university: "University of Calgary",
    degrees: [
      {
        school: "Schulich School of Engineering",
        degree: "Software Engineering",
      },
      {
        school: "Haskayne School of Business",
        degree: "Commerce",
      },
    ],
    backgroundImageLink:
      "https://www.macleans.ca/wp-content/uploads/2019/04/University-of-Calgary-Insider-Report.jpg",
  };

  return (
    <ScrollArticle>
      <Education {...engineeringInfo} />
    </ScrollArticle>
  );
};

export default EducationPage;
