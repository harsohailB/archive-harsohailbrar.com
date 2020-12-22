import React from "react";
import styled from "styled-components";
import { EducationInfo } from ".";
import ScrollSection from "../styled/ScrollSection";
import SlideWrapper from "../styled/SlideWrapper";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  padding-top: calc(12vh + 20px);
  padding-bottom: calc(7vh + 20px);
`;

const University = styled.h1`
  font-size: 80px;
  color: white;
  margin: 0px !important;
  padding-bottom: 30px;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const SchoolsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
`;

const SchoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const School = styled.h2`
  font-size: 30px;
  color: white;
  margin: 0px !important;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Degree = styled.p`
  font-size: 20px;
  color: white;
  margin: 0px !important;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Education = (props: EducationInfo) => {
  return (
    <ScrollSection>
      <SlideWrapper backgroundImageLink={props.backgroundImageLink}>
        <InfoWrapper>
          <University>{props.university}</University>

          <SchoolsInfo>
            <SchoolWrapper style={{ alignItems: "flex-start" }}>
              <School style={{ textAlign: "left" }}>
                {props.degrees[0].school}
              </School>
              <Degree style={{ textAlign: "left" }}>
                {props.degrees[0].degree}
              </Degree>
            </SchoolWrapper>
            <SchoolWrapper style={{ alignItems: "flex-end" }}>
              <School style={{ textAlign: "right" }}>
                {props.degrees[1].school}
              </School>
              <Degree style={{ textAlign: "right" }}>
                {props.degrees[1].degree}
              </Degree>
            </SchoolWrapper>
          </SchoolsInfo>
        </InfoWrapper>
      </SlideWrapper>
    </ScrollSection>
  );
};

export default Education;
