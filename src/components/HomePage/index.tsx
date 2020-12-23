import React from "react";
import styled from "styled-components";
import Button from "../styled/Button";
import SlideWrapper from "../styled/SlideWrapper";
import AnimatedArrowDown from "../styled/AnimatedArrowDown";
import InformationSection from "./InformationSection";

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
  justify-content: space-between;
  padding-top: 15%;
  width: 100%;
  height: 100vh;

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
  padding-left: 10%;

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
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

function HomePage() {
  const myPictureLink = "https://i.imgur.com/SuubF4e.jpg";

  return (
    <ScrollArticle>
      <ScrollSection>
        <SlideWrapper backgroundImageLink={myPictureLink}>
          <InfoWrapper>
            <Title>Hi, I am Harsohail Brar 👋</Title>

            <div>
              <ButtonsWrapper>
                <Button href="/projects" backgroundColor="white" color="black">
                  View Projects
                </Button>
              </ButtonsWrapper>

              <AnimatedArrowDown />
            </div>
          </InfoWrapper>
        </SlideWrapper>
      </ScrollSection>

      <ScrollSection>
        <InformationSection />
      </ScrollSection>
    </ScrollArticle>
  );
}

export default HomePage;
