import React from "react";
import styled from "styled-components";
import Project from "./Project";
import ScrollArticle from "../styled/ScrollArticle";

export type ProjectInfo = {
  title: string;
  description: string;
  backgroundImageLink: string;
  githubLink: string | null;
  liveDemoLink: string | null;
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

  const dentistryInfo: ProjectInfo = {
    title: "Shaganappi Dentistry",
    description: "A local dentistry business' website",
    backgroundImageLink:
      "https://static.wixstatic.com/media/58f522_c36868948834473b96c45d22d7da015d~mv2_d_5855_3893_s_4_2.jpg/v1/fill/w_3358,h_1496,al_c,q_90,usm_0.66_1.00_0.01/58f522_c36868948834473b96c45d22d7da015d~mv2_d_5855_3893_s_4_2.webp",
    githubLink: null,
    liveDemoLink: "https://www.shaganappidentistry.ca/",
  };

  return (
    <ScrollArticle>
      <Project animated projectInfo={jamboInfo} />
      <Project animated projectInfo={tlreadrInfo} />
      <Project animated={false} projectInfo={dentistryInfo} />
    </ScrollArticle>
  );
}

export default ProjectsPage;
