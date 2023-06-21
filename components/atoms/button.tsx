import React from "react";
import styled from "styled-components";

interface ButtonProps {
  color: "red" | "black";
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

const ButtonStyled = styled.button<ButtonProps>`
  width: 100%;
  color: #fff;
  padding: 0.5rem;
  border: none;

  background: ${({ color }) =>
    color === "red" ? "var(--brand-gradient)" : "#000"};
`;
