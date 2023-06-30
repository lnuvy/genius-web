import React from "react";
import styled from "styled-components";
import { useGameContext } from "../context/game-context";

interface HistoryProps {}

const History = (props: HistoryProps) => {
  const {} = props;
  const { answers } = useGameContext();

  return <Frame>{answers.map((v) => v)}</Frame>;
};

export default History;

const Frame = styled.div``;
