import React from "react";
import styled from "styled-components";
import Education from "./Education";

export type EducationInfo = {
  title: string;
  description: string;
  backgroundImageLink: string;
};

const Wrapper = styled.article`
  min-height: 100vh;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const EducationPage = () => {
  const engineeringInfo: EducationInfo = {
    title: "Schulich School of Engineering",
    description: "Software Engineering",
    backgroundImageLink:
      "https://schulich.ucalgary.ca/sites/default/files/2020-10/ENG%20Fourth%20Floor.jpg",
  };

  return (
    <Wrapper>
      <Education {...engineeringInfo} />
    </Wrapper>
  );
};

export default EducationPage;
