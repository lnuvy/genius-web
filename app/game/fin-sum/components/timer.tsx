import React, { useEffect } from "react";
import styled from "styled-components";
import Typo from "@/components/atoms/typo";
import { useTurnContext } from "../context/turn-context";
import { Match, Switch } from "@/components/utils";
import GuideBox from "./guide-box";
import { useGameContext } from "../context/game-context";

interface TimerProps {}

const Timer = (props: TimerProps) => {
  const {} = props;
  const { isGuide } = useGameContext();
  const { time } = useTurnContext();

  return (
    <Switch>
      <Match when={!isGuide}>
        <Frame>
          <Typo size={16}>{time}</Typo>
        </Frame>
      </Match>
      <Match when={!!isGuide}>
        <GuideBox />
      </Match>
    </Switch>
  );
};

export default Timer;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
