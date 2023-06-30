import React from "react";
import styled from "styled-components";
import { useScoreContext } from "../context/score-context";

interface ScoreProps {}

const Score = (props: ScoreProps) => {
  const {} = props;
  const { score } = useScoreContext();

  return <Frame>{score} 점</Frame>;
};

export default Score;

const Frame = styled.div``;
