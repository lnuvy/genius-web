import React from "react";
import styled from "styled-components";

interface BoardProps {}

const Board = (props: BoardProps) => {
  const {} = props;

  return <Frame></Frame>;
};

export default Board;

const Frame = styled.div`
  display: grid;
`;
