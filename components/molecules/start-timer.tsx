import React from "react";
import styled from "styled-components";
import Typo from "../atoms/typo";

interface TimerProps {
  number: number;
}

/**
 * 게임 시작 전 안내 타이머
 *
 */
const StartTimer = (props: TimerProps) => {
  const { number } = props;

  return (
    <Frame>
      <Typo size={32}>{number}</Typo>
    </Frame>
  );
};

export default StartTimer;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
