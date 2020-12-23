import React from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

const Wrapper = styled.div`
  color: #171a20;
  font-size: 60px;
  opacity: 0.85;
  animation: action 1s linear alternate infinite;

  @keyframes action {
    0% {
      transform: translate(0px 0px);
    }

    100% {
      transform: translate(0px, 20px);
    }
  }
`;

const AnimatedArrowDown = () => {
  return (
    <Wrapper>
      <FaAngleDown />
    </Wrapper>
  );
};

export default AnimatedArrowDown;
