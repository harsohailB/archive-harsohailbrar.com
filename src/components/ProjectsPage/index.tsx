import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Wrapper = styled.article`
  min-height: 100vh;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export type ProjectInfo = {
  title: string;
  description: string;
  backgroundImageLink: string;
  githubLink: string;
  liveDemoLink: string;
};

function ProjectsPage() {
  const jamboInfo: ProjectInfo = {
    title: "Jambo",
    description:
      "An e-commerce store to sell merchandise for Jambo Apparel (non-profit organization)",
    backgroundImageLink:
      "https://images.unsplash.com/photo-1488265333142-353a12931ee9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    githubLink: "https://github.com/harsohailB/Jambo",
    liveDemoLink: "https://www.jamboapparel.com/",
  };

  const tlreadrInfo: ProjectInfo = {
    title: "TLreaDR",
    description:
      "A platform to share and interact with summarized news articles about current affairs",
    backgroundImageLink:
      "https://images.unsplash.com/photo-1585241936939-be4099591252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    githubLink: "https://github.com/garywu2/TLreaDR",
    liveDemoLink: "http://tlreadr.com/",
  };

  return (
    <Wrapper>
      <Project {...jamboInfo} />
      <Project {...tlreadrInfo} />
    </Wrapper>
  );
}

export default ProjectsPage;
