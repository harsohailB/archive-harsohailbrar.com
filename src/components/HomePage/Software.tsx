import React from "react";
import styled from "styled-components";

import softwareSVG from "../../assets/software.svg";
import SoftwareColumn from "./SoftwareColumn";
import { SoftwareColumnProps } from "./SoftwareColumn";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1%;
    padding-right: 1%;
    justify-contents: center;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66vw;
  padding-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    width: 95%;
    display: grid;
    margin-top: 10px;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-row: auto auto;
    grid-gap: 5px;
  }
`;

const Quote = styled.h1`
  margin: 0px !important;
  font-size: 40px;
  color: #3f3d56;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  width: 33vw;
  height: auto;

  @media (max-width: 768px) {
    width: 60%;
    display: none;
  }
`;

const Software = () => {
  const languages: SoftwareColumnProps = {
    title: "Languages",
    entries: [
      "Java",
      "C",
      "C++",
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  };

  const frontEnd: SoftwareColumnProps = {
    title: "Front End",
    entries: ["React", "Redux", "jQuery", "AJAX"],
  };

  const backEnd: SoftwareColumnProps = {
    title: "Back End",
    entries: ["Flask", "ExpressJS"],
  };

  const databases: SoftwareColumnProps = {
    title: "Databases",
    entries: ["MySQL", "PostgreSQL", "FaunaDB"],
  };

  const deployment: SoftwareColumnProps = {
    title: "Deployment",
    entries: ["AWS", "Docker", "GitHub Actions", "YAML"],
  };

  return (
    <Wrapper>
      <Image src={softwareSVG}></Image>

      <ColumnWrapper>
        <RowWrapper>
          <SoftwareColumn {...languages} />
          <SoftwareColumn {...frontEnd} />
          <SoftwareColumn {...backEnd} />
          <SoftwareColumn {...databases} />
          <SoftwareColumn {...deployment} />
        </RowWrapper>
      </ColumnWrapper>
    </Wrapper>
  );
};

export default Software;
