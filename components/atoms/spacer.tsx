import React from "react";
import styled from "styled-components";

export interface HorizontalSpacerProps {
  width: number;
  height?: undefined;
}

export interface VerticalSpacerProps {
  width?: undefined;
  height: number;
}
const Spacer = (props: HorizontalSpacerProps | VerticalSpacerProps) => {
  const { width, height } = props;

  if (width) {
    return <Frame width={width}></Frame>;
  }

  if (height) {
    return <Frame height={height}></Frame>;
  }

  return <Frame></Frame>;
};

export default Spacer;

const Frame = styled.div<{ width?: number; height?: number }>`
  width: ${(props) => `${props.width ?? 0}rem;`};
  height: ${(props) => `${props.height ?? 0}rem;`};
`;
