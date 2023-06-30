import React from "react";
import styled from "styled-components";
import RoundTitle from "./round-title";
import Board from "./board";
import Spacer from "@/components/atoms/spacer";
import ButtonBox from "./button-box";
import { useGameContext } from "../context/game-context";
import Switch from "@/components/utils/switch";
import Match from "@/components/utils/match";
import Score from "./score";
import History from "./history";

interface TemplateProps {}

const Template = (props: TemplateProps) => {
  const {} = props;

  const { roundStart, waitingTime } = useGameContext();

  return (
    <Frame>
      <Switch>
        <Match when={!roundStart}>
          <>{waitingTime} 초 뒤 시작합니다</>
        </Match>

        <Match when={roundStart}>
          <RoundTitle />
          <Board />
          <Spacer height={2} />
          {/* <Timer /> */}
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
