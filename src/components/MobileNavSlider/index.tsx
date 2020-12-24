import React from "react";
import Slide from "react-reveal/Slide";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface MobileNavSliderProps {
  mobileMenuToggled: boolean;
  setMobileMenuToggled: any;
}

const Wrapper = styled.div`
  width: 312px;
  min-height: 100vh;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%:
`;

const ReferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Reference = styled(Link)`
  color: #393c41;
  font-size: 12px;
  padding: 20px calc(20px / 2);
  max-width: 272px;
  margin-left: 20px;
  margin-right: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid #bbb;
  text-decoration: none;
  text-align: left;
`;

const EReference = styled.a`
  color: #393c41;
  font-size: 12px;
  padding: 20px calc(20px / 2);
  max-width: 272px;
  margin-left: 20px;
  margin-right: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid #bbb;
  text-decoration: none;
  text-align: left;
`;

const ExtReference = styled.a`
  cursor: pointer;
  line-height: 1.25;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 500;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

const SocialLinks = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MobileNavSlider = (props: MobileNavSliderProps) => {
  const resumeLink =
    "https://drive.google.com/file/d/1bZgMkuhOrdOzewz5KXq2O6mZzxCC1hLO/view?usp=sharing";

  const closeMobileMenu = () => {
    props.setMobileMenuToggled(false);
  };

  return (
    <Wrapper>
      <IconWrapper>
        <FaTimes
          size={14}
          style={{ padding: "20px" }}
          onClick={closeMobileMenu}
        />
      </IconWrapper>

      <Slide right>
        <ReferenceWrapper>
          <Reference to="/" onClick={closeMobileMenu}>
            Home
          </Reference>
          <Reference to="/projects" onClick={closeMobileMenu}>
            Projects
          </Reference>
          {/* <Reference to="/experience" onClick={closeMobileMenu}>
          Experience
        </Reference>
        <Reference to="/education" onClick={closeMobileMenu}>
          Education
        </Reference> */}
          <EReference href={resumeLink} onClick={closeMobileMenu}>
            Resume
          </EReference>
        </ReferenceWrapper>

        <SocialLinks>
          <ExtReference href="https://www.linkedin.com/in/harsohailbrar/">
            <FaLinkedinIn />
          </ExtReference>

          <ExtReference href="https://github.com/harsohailB">
            <FaGithub />
          </ExtReference>
        </SocialLinks>
      </Slide>
    </Wrapper>
  );
};

export default MobileNavSlider;
