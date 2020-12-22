import styled from "styled-components";

interface WrapperProps {
  backgroundImageLink: string;
}

const SlideWrapper = styled.div<WrapperProps>`
  background-image: url(${(props) => props.backgroundImageLink});
  min-height: 100vh;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

export default SlideWrapper;
