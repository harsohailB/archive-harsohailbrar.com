import React from "react";
import styled from "styled-components";

import SlideWrapper from "../styled/SlideWrapper";
import ScrollSection from "../styled/ScrollSection";
import Button from "../styled/Button";
import { ProjectInfo } from ".";
import AnimatedArrowDown from "../styled/AnimatedArrowDown";

const ProjectInfoWrapper = styled.div`
  padding-top: calc(7vh + 20px);
`;

const Title = styled.h1`
  font-size: 40px;
  color: #000000;
  margin: 0px !important;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #000000;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: calc(2vh + 20px);

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;

interface ProjectProps {
  projectInfo: ProjectInfo;
  animated: boolean;
}

const Project = (props: ProjectProps) => {
  return (
    <ScrollSection>
      <SlideWrapper backgroundImageLink={props.projectInfo.backgroundImageLink}>
        <ProjectInfoWrapper>
          <Title>{props.projectInfo.title}</Title>
          <Description>{props.projectInfo.description}</Description>
        </ProjectInfoWrapper>

        <div>
          <ButtonsWrapper>
            {props.projectInfo.liveDemoLink && (
              <Button
                href={props.projectInfo.liveDemoLink}
                backgroundColor="#171a20"
                color="white"
              >
                Live Demo
              </Button>
            )}

            {props.projectInfo.githubLink && (
              <Button
                href={
                  props.projectInfo.githubLink
                    ? props.projectInfo.githubLink
                    : ""
                }
                backgroundColor="white"
                color="black"
              >
                GitHub
              </Button>
            )}
          </ButtonsWrapper>

          {props.animated && <AnimatedArrowDown />}
        </div>
      </SlideWrapper>
    </ScrollSection>
  );
};

export default Project;
