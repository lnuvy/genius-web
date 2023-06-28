"use client";

import React from "react";
import styled from "styled-components";
import VersionProvider from "../context/version-context";
import Board from "../components/board";
import RoundTitle from "../components/round-title";
import GameProvider from "../context/game-context";
import Spacer from "@/components/atoms/spacer";
import Timer from "../components/timer";
import ButtonBox from "../components/button-box";
import TurnProvider from "../context/turn-context";
import ScoreProvider from "../context/score-context";

/**
 * 결! 합! 게임 페이지
 */
const GamePage = () => {
  return (
    <GameProvider>
      <VersionProvider>
        <Frame>
          <RoundTitle />
          <Board />
          <ScoreProvider>
            <>
              <Spacer height={2} />
              <TurnProvider>
                <>
                  {/* <Timer /> */}
                  <Spacer height={2} />
                  <ButtonBox />
                </>
              </TurnProvider>
            </>
          </ScoreProvider>
        </Frame>
      </VersionProvider>
    </GameProvider>
  );
};

export default GamePage;

const Frame = styled.div`
  background: var(--background);
  min-width: 100vw;
  min-height: 100vh;
`;
