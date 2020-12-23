import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
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
    font-size: 16px;
  }
`;

const Subtitle = styled.h3`
  margin: 0px !important;
  text-align: left;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Timeline = styled.p`
  margin: 0px !important;
  text-align: left;
  font-size: 12px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 8px;
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
    <Wrapper>
      <Logo src={props.logo}></Logo>

      <InfoWrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Timeline>{props.timeline}</Timeline>
      </InfoWrapper>
    </Wrapper>
  );
};

export default InformationTile;
