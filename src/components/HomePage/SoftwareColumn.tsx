import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;

  @media (max-width: 768px) {
    margin: 0;
    justify-self: center;
  }
`;

const Header = styled.div`
  background-color: #6b63ff;
  border-radius: 20px 20px 0px 0px;
  padding: 10px;
  color: white;
  font-weight: 600;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 8px;
    padding-left: 0;
    padding-right: 0;
    border-radius: 10px 10px 0px 0px;
  }
`;

const Body = styled.div`
  background-color: #3f3d56;
  color: white;
  border-radius: 0px 0px 20px 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    border-radius: 0px 0px 10px 10px;
    padding: 2px;
  }
`;

const Text = styled.p`
  margin: 0px !important;
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export interface SoftwareColumnProps {
  title: string;
  entries: string[];
}

const SoftwareColumn = (props: SoftwareColumnProps) => {
  return (
    <Wrapper>
      <Slide top>
        <Header>{props.title}</Header>
      </Slide>
      <Slide bottom>
        <Body>
          {props.entries.map((entry) => (
            <Text>{entry}</Text>
          ))}
        </Body>
      </Slide>
    </Wrapper>
  );
};

export default SoftwareColumn;
