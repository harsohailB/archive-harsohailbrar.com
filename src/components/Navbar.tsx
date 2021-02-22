import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import personalLogo from "../assets/personalLogo.png";
import MobileNavSlider from "./MobileNavSlider";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  display: flex;
  height: 52px;
  justify-content: space-between;
  align-items: center;
`;

const PageReferences = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  left: 10%;
  width: 80%;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Reference = styled(Link)`
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

const ExtReference = styled.a`
  line-height: 1.25;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 500;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-right: 16px;
`;

const MenuIcon = styled.div`
  font-size: 14px;
  margin-right: 20px;
  color: black;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

function Navbar() {
  const resumeLink =
    "https://drive.google.com/file/d/1GLFnbML16BdmW_q7gdoGMWVngOQBuBrT/view?usp=sharing";

  const [mobileMenuToggled, setMobileMenuToggled] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuToggled(!mobileMenuToggled);
  };

  return (
    <Wrapper>
      <Reference to="/">
        <img src={personalLogo} style={{ width: "75px" }} />
      </Reference>

      <PageReferences>
        <Reference to="/">Home</Reference>
        <Reference to="/projects">Projects</Reference>
        <ExtReference href={resumeLink}>Resume</ExtReference>
      </PageReferences>

      <SocialLinks>
        <ExtReference href="https://www.linkedin.com/in/harsohailbrar/">
          <FaLinkedinIn />
        </ExtReference>

        <ExtReference href="https://github.com/harsohailB">
          <FaGithub />
        </ExtReference>
      </SocialLinks>

      <MenuIcon onClick={handleMobileMenuClick}>
        <FaBars />
      </MenuIcon>

      {mobileMenuToggled && (
        <MobileNavSlider
          mobileMenuToggled={mobileMenuToggled}
          setMobileMenuToggled={setMobileMenuToggled}
        />
      )}
    </Wrapper>
  );
}

export default Navbar;
