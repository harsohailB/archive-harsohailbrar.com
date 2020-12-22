import React from "react";
import styled from "styled-components";
import { ExperienceInfo } from ".";
import ScrollSection from "../styled/ScrollSection";
import SlideWrapper from "../styled/SlideWrapper";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: calc(7vh + 20px);
`;

const Company = styled.h1`
  font-size: 40px;
  color: #000000;
  margin: 0px !important;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Position = styled.h3`
  font-size: 20px;
  text-align: center;
  margin: 0px !important;
`;

const Timeline = styled.p`
  font-size: 14px;
  font-style: italic;
  text-align: center;
  margin: 0px !important;
`;

const Experience = (props: ExperienceInfo) => {
  return (
    <ScrollSection>
      <SlideWrapper backgroundImageLink={props.backgroundImageLink}>
        <InfoWrapper>
          <Company>{props.company}</Company>
          <Position>{props.position}</Position>
          <Timeline>{props.timeline}</Timeline>
        </InfoWrapper>
      </SlideWrapper>
    </ScrollSection>
  );
};

export default Experience;
