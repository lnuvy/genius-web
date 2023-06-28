import React from "react";
import styled from "styled-components";

enum ButtonColor {
  Red = "red",
  Black = "black",
  White = "white",
  // 추가적인 값들을 여기에 정의
}

interface ButtonProps {
  color: "red" | "black" | "white";
  children: JSX.Element | string;
  onClick?: () => void;
}

/**
 * 공용 버튼
 */
const Button = (props: ButtonProps) => {
  const { color, onClick } = props;

  return (
    <ButtonStyled {...props} onClick={onClick}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;

const getButtonBackground = (color: string): string => {
  switch (color) {
    case ButtonColor.Red:
      return "var(--brand-gradient)";
    case ButtonColor.Black:
      return "#000";
    case ButtonColor.White:
      return "#fff";
    default:
      return "fff";
  }
};

const ButtonStyled = styled.button<ButtonProps>`
  width: 100%;
  color: #fff;
  padding: 0.5rem;
  border: none;

  background: ${({ color }) => getButtonBackground(color)};
`;
