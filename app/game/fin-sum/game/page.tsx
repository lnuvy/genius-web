"use client";

import React from "react";
import styled from "styled-components";
import VersionProvider from "../context/version-context";
import GameProvider from "../context/game-context";
import TurnProvider from "../context/turn-context";
import ScoreProvider from "../context/score-context";
import Template from "../components/template";

/**
 * 결! 합! 게임 페이지
 */
const GamePage = () => {
  return (
    <GameProvider>
      <VersionProvider>
        <ScoreProvider>
          <TurnProvider>
            <Template />
          </TurnProvider>
        </ScoreProvider>
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
