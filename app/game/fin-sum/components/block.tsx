import React from "react";
import styled from "styled-components";

interface BlockProps {
  shapeId: number;
  colorId: number;
  bgId: number;
}

const Block = (props: BlockProps) => {
  const { shapeId } = props;

  return <Frame></Frame>;
};

export default Block;

const Frame = styled.div``;
