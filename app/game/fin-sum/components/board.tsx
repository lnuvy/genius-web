import React from "react";
import styled from "styled-components";
import Block from "./block";

interface BoardProps {}

const Board = (props: BoardProps) => {
  const {} = props;

  return (
    <Frame>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
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
