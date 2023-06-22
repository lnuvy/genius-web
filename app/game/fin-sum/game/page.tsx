"use client";

import React from "react";
import SunSvg from "../svg/sun";
import MoonSvg from "../svg/moon";
import StarSvg from "../svg/star";
import styled from "styled-components";
import Block from "../components/block";
import VersionProvider from "../context/version-context";
import Board from "../components/board";
import RoundTitle from "../components/round-title";
import GameProvider from "../context/game-context";

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
