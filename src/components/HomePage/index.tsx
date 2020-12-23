import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../styled/Button";
import SlideWrapper from "../styled/SlideWrapper";
import AnimatedArrowDown from "../styled/AnimatedArrowDown";
import InformationSection from "./InformationSection";
import Software from "./Software";

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
  justify-content: flex-end;
  padding-top: 15%;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    padding-top: 25%;
    padding-left: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: calc(2vh);

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;

function HomePage() {
  const myPictureLink = "https://i.imgur.com/BaPRdW2.jpg";

  const infoSectionRef = useRef(document.createElement("div"));

  const scrollToInformationSection = () => {
    infoSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollArticle>
      <ScrollSection>
        <SlideWrapper backgroundImageLink={myPictureLink}>
          <InfoWrapper>
            <div style={{ paddingBottom: "4vh" }}>
              <ButtonsWrapper>
                <Button
                  backgroundColor="#171a20"
                  color="white"
                  onClick={scrollToInformationSection}
                >
                  Learn More
                </Button>
                <Button href="/projects" backgroundColor="white" color="black">
                  View Projects
                </Button>
              </ButtonsWrapper>

              <AnimatedArrowDown animated />
            </div>
          </InfoWrapper>
        </SlideWrapper>
      </ScrollSection>

      <ScrollSection ref={infoSectionRef} style={{ height: "100vh" }}>
        <Software />
        <InformationSection />
      </ScrollSection>
    </ScrollArticle>
  );
}

export default HomePage;
