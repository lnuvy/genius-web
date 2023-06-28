import React from "react";
import styled from "styled-components";
import Block from "./block";
import { useGameContext } from "../context/game-context";

interface BoardProps {}

const Board = (props: BoardProps) => {
  const {} = props;
  const { boards } = useGameContext();

  return (
    <Frame>
      {boards.map((item, index) => {
        console.log("item", item);
        return <Block key={index} {...item} numbering={index + 1} />;
      })}
    </Frame>
  );
};

export default Board;

const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100vw;
  height: 100vw;
  /* max-height: 100vh; */
  border: 1px solid #fff;
  box-sizing: border-box;
`;
