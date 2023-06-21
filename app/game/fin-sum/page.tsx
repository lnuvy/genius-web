"use client";

import Button from "@/components/atoms/button";
import GameTitle from "@/components/molecules/game-title";
import React from "react";
import styled from "styled-components";

/**
 * 결! 합!
 */
const FinSumPage = () => {
  return (
    <Frame>
      <GameTitle />
      <ButtonWrapper>
        <Button color="red">게임 시작</Button>
        <Button color="red">게임 설명</Button>
      </ButtonWrapper>
    </Frame>
  );
};

export default FinSumPage;

const Frame = styled.div`
  padding: 2rem;
`;

const ButtonWrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
