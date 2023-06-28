import Match from "@/components/utils/match";
import Switch from "@/components/utils/switch";
import React from "react";
import styled from "styled-components";
import { uesVersionContext } from "../../context/version-context";
import StarSvg from "../../svg/star";
import { getColorFromGrandFinal, getColorFromOne } from "../../algorithm";

export interface IconsProps {
  colorId: number;
}

const StarCircle = (props: IconsProps) => {
  const { colorId } = props;
  const { isGrandFinal } = uesVersionContext();

  const color = isGrandFinal
    ? getColorFromGrandFinal(colorId)
    : getColorFromOne(colorId);

  return (
    <Switch>
      <Match when={isGrandFinal}>
        <StarSvg color={color} />
      </Match>
      <Match when={!isGrandFinal}>
        <Circle color={color} />
      </Match>
    </Switch>
  );
};

export default StarCircle;

const Circle = styled.div<{ color: string }>`
  background-color: ${({ color }) => `var(--${color})`};

  width: 60%;
  height: 60%;

  border-radius: 100%;
`;
