import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import personalLogo from "../assets/personalLogo.png";

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
  width: 100%;
  text-align: center;
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
  display: flex;
  margin-right: 16px;
`;

function Navbar() {
  return (
    <Wrapper>
      <Reference to="/">
        <img src={personalLogo} style={{ width: "75px" }} />
      </Reference>

      <PageReferences>
        <Reference to="/">Home</Reference>
        <Reference to="/projects">Projects</Reference>
        <ExtReference href="https://drive.google.com/file/d/1bZgMkuhOrdOzewz5KXq2O6mZzxCC1hLO/view?usp=sharing">
          Resume
        </ExtReference>
        {/* <Reference to="/about">About</Reference> */}
      </PageReferences>

      <SocialLinks>
        <ExtReference href="https://www.linkedin.com/in/harsohailbrar/">
          <FaLinkedinIn />
        </ExtReference>

        <ExtReference href="https://github.com/harsohailB">
          <FaGithub />
        </ExtReference>
      </SocialLinks>
    </Wrapper>
  );
}

export default Navbar;
