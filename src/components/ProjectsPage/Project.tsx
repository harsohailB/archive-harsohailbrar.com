import React from "react";
import styled from "styled-components";

import SlideWrapper from "../styled/SlideWrapper";
import { ProjectInfo } from ".";

interface ButtonProps {
  backgroundColor: string;
  color: string;
}

const ScrollSection = styled.section`
  scroll-snap-align: start;
`;

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

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: calc(7vh + 20px);

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: calc(12vh + 20px);
  }
`;

const ButtonLink = styled.a<ButtonProps>`
  text-decoration: none;
  margin: 8px;
  padding: 12px 40px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.backgroundColor === "#171a20" ? "0.85" : "1")};
  border-radius: 20px;
  min-width: 175px;
  width: 175px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;

const Project = (projectInfo: ProjectInfo) => {
  return (
    <ScrollSection>
      <SlideWrapper backgroundImageLink={projectInfo.backgroundImageLink}>
        <ProjectInfoWrapper>
          <Title>{projectInfo.title}</Title>
          <Description>{projectInfo.description}</Description>
        </ProjectInfoWrapper>

        <LinksWrapper>
          {projectInfo.liveDemoLink && (
            <ButtonLink
              href={projectInfo.liveDemoLink}
              backgroundColor="#171a20"
              color="white"
            >
              Live Demo
            </ButtonLink>
          )}

          {projectInfo.githubLink && (
            <ButtonLink
              href={projectInfo.githubLink ? projectInfo.githubLink : ""}
              backgroundColor="white"
              color="black"
            >
              GitHub
            </ButtonLink>
          )}
        </LinksWrapper>
      </SlideWrapper>
    </ScrollSection>
  );
};

export default Project;
