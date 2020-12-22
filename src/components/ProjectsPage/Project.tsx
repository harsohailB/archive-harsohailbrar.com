import React from "react";
import styled from "styled-components";
import { ProjectInfo } from ".";

interface WrapperProps {
  backgroundImageLink: string;
}

interface ButtonProps {
  backgroundColor: string;
  color: string;
}

const ScrollSection = styled.section`
  scroll-snap-align: start;
`;

const Wrapper = styled.div<WrapperProps>`
  background-image: url(${(props) => props.backgroundImageLink});
  min-height: 100vh;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const ProjectInfoWrapper = styled.div`
  padding-top: calc(7vh + 20px);
`;

const Title = styled.h1`
  font-size: 40px;
  color: #000000;
  margin: 0px !important;
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
      <Wrapper backgroundImageLink={projectInfo.backgroundImageLink}>
        <ProjectInfoWrapper>
          <Title>{projectInfo.title}</Title>
          <Description>{projectInfo.description}</Description>
        </ProjectInfoWrapper>

        <LinksWrapper>
          <ButtonLink
            href={projectInfo.liveDemoLink}
            backgroundColor="#171a20"
            color="white"
          >
            Live Demo
          </ButtonLink>
          <ButtonLink
            href={projectInfo.githubLink}
            backgroundColor="white"
            color="black"
          >
            GitHub
          </ButtonLink>
        </LinksWrapper>
      </Wrapper>
    </ScrollSection>
  );
};

export default Project;
