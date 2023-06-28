import Button from "@/components/atoms/button";
import Typo from "@/components/atoms/typo";
import React, { useState } from "react";
import styled from "styled-components";
import { useGameContext } from "../context/game-context";
import UserInput from "./user-input";

interface ButtonBoxProps {}

type SubmitModeType = "결" | "합" | false;

const ButtonBox = (props: ButtonBoxProps) => {
  const {} = props;
  const [isSubmitMode, setSubmitMode] = useState<SubmitModeType>(false);

  const { isBoardTouch, toggleSubmitMode } = useGameContext();

  if (isBoardTouch) {
    return <UserInput />;
  }

  return (
    <Frame>
      <CustomButton onClick={() => {}}>
        <Typo fontWeight="Bold" size={22}>
          결
        </Typo>
      </CustomButton>
      <CustomButton onClick={toggleSubmitMode}>
        <Typo fontWeight="Bold" size={22}>
          합
        </Typo>
      </CustomButton>
    </Frame>
  );
};

export default ButtonBox;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const CustomButton = styled.button`
  /* border: 0; */
  width: 25vw;
  height: 25vw;
  background-color: #fff;
  color: #731e0a;
  -webkit-text-stroke: 1px #c09074;
`;
