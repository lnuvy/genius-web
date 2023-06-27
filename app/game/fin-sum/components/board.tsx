import React from "react";
import styled from "styled-components";
import Block from "./block";
import { uesGameContext } from "../context/game-context";

interface BoardProps {}

const Board = (props: BoardProps) => {
  const {} = props;
  const { boards } = uesGameContext();

  return (
    <Frame>
      {boards.map((item, key) => {
        console.log("item", item);
        return <Block key={key} {...item} />;
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
