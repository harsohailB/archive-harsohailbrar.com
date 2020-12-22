import React from "react";
import styled from "styled-components";
import SlideWrapper from "../styled/SlideWrapper";

const ScrollArticle = styled.article`
  min-height: 100vh;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const ScrollSection = styled.section`
  scroll-snap-align: start;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  padding-left: 10%;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 25%;
    padding-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: #000000;
  margin: 0px !important;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #000000;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

function HomePage() {
  const myPictureLink = "https://i.imgur.com/SuubF4e.jpg";

  return (
    <ScrollArticle>
      <ScrollSection>
        <SlideWrapper backgroundImageLink={myPictureLink}>
          <InfoWrapper>
            <Title>Hi, I am Harsohail Brar 👋</Title>
            {/* <Description>Passionate about Software Development</Description> */}
          </InfoWrapper>
        </SlideWrapper>
      </ScrollSection>
    </ScrollArticle>
  );
}

export default HomePage;
