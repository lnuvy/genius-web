import React from "react";
import styled from "styled-components";
import { useTurnContext } from "../context/turn-context";
import Typo from "@/components/atoms/typo";
import { CHAR_BLANK } from "@/constant/char";

interface UserInputProps {}

const UserInput = (props: UserInputProps) => {
  const {} = props;
  const { userAnswer } = useTurnContext();

  return (
    <Frame>
      <InputWrapper>
        <Typo fontWeight="Bold" size={22}>
          합
        </Typo>
        {CHAR_BLANK}
        <NumberWrapper>
          <Typo size={22}>{userAnswer.join(" ")}</Typo>
        </NumberWrapper>
      </InputWrapper>
    </Frame>
  );
};

export default UserInput;

const Frame = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 80%;
  margin: 0 auto;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  color: #731e0a;
  /* background-color: var(--brand-secondary); */
  background-color: var(--brand-secondary);
  padding: 0.5rem 2rem;
  -webkit-text-stroke: 1px #c09074;
`;

const NumberWrapper = styled.div`
  color: var(--normal);
`;
