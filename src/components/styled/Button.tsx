import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  color: string;
}

const Button = styled.a<ButtonProps>`
  text-decoration: none;
  margin: 8px;
  padding: 12px 40px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.backgroundColor === "#171a20" ? "0.85" : "1")};
  border-radius: 20px;
  min-width: 175px;
  width: 175px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;

  &: hover {
    cursor: pointer;
  }
`;

export default Button;
