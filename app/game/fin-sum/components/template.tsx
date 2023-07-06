import React from "react";
import styled from "styled-components";
import RoundTitle from "./round-title";
import Board from "./board";
import Spacer from "@/components/atoms/spacer";
import ButtonBox from "./button-box";
import { useGameContext } from "../context/game-context";
import Score from "./score";
import History from "./history";
import StartTimer from "@/components/molecules/start-timer";
import { Match, Switch } from "@/components/utils";
import Timer from "./timer";

interface TemplateProps {}

const Template = (props: TemplateProps) => {
  const {} = props;

  const { isStart, waitingTime } = useGameContext();

  return (
    <Frame>
      <Switch>
        <Match when={!isStart}>
          <RoundTitle />
          <StartTimer number={waitingTime} />
        </Match>

        <Match when={isStart}>
          <RoundTitle />
          <Board />
          <Spacer height={2} />
          <Timer />
          <Spacer height={2} />
          <ButtonBox />
          <History />
          <Score />
        </Match>
      </Switch>
    </Frame>
  );
};

export default Template;

const Frame = styled.div`
  background: var(--background);
  min-width: 100vw;
  min-height: 100vh;
`;
