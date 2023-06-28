import Button from "@/components/atoms/button";
import Typo from "@/components/atoms/typo";
import React from "react";
import styled from "styled-components";

interface ButtonBoxProps {}

const ButtonBox = (props: ButtonBoxProps) => {
  const {} = props;

  return (
    <Frame>
      <CustomButton>
        <Typo fontWeight="Bold" size={22}>
          결
        </Typo>
      </CustomButton>
      <CustomButton>
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
  border: 0;
  width: 25vw;
  height: 25vw;
  background-color: #fff;
  color: #731e0a;
  -webkit-text-stroke: 1px #c09074;
`;
