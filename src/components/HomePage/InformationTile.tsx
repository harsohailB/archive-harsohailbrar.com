import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
`;

const Title = styled.h1`
  margin: 0px !important;
  text-align: left;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const Subtitle = styled.h3`
  margin: 0px !important;
  text-align: left;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Timeline = styled.p`
  margin: 0px !important;
  text-align: left;
  font-size: 14px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

export interface InformationTileProps {
  logo: string;
  title: string;
  subtitle: string;
  timeline: string;
}

const InformationTile = (props: InformationTileProps) => {
  return (
    <Slide bottom>
      <Wrapper>
        <Logo src={props.logo}></Logo>

        <InfoWrapper>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
          <Timeline>{props.timeline}</Timeline>
        </InfoWrapper>
      </Wrapper>
    </Slide>
  );
};

export default InformationTile;
