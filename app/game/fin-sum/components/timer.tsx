import React, { useEffect } from "react";
import styled from "styled-components";
import Typo from "@/components/atoms/typo";
import { uesTurnContext } from "../context/turn-context";

interface TimerProps {}

const Timer = (props: TimerProps) => {
  const {} = props;
  const { time } = uesTurnContext();

  return (
    <Frame>
      <Typo>{time} 초</Typo>
    </Frame>
  );
};

export default Timer;

const Frame = styled.div``;
