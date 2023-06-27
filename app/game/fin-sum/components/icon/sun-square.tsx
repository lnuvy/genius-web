import Match from "@/components/utils/match";
import Switch from "@/components/utils/switch";
import React from "react";
import styled from "styled-components";
import { uesVersionContext } from "../../context/version-context";
import SunSvg from "../../svg/sun";
import { getColorFromGrandFinal, getColorFromOne } from "../../algorithm";
import { IconsProps } from "./star-circle";

const SunSquare = (props: IconsProps) => {
  const { colorId } = props;
  const { isGrandFinal } = uesVersionContext();

  const color = !isGrandFinal
    ? getColorFromGrandFinal(colorId)
    : getColorFromOne(colorId);

  return (
    <Switch>
      <Match when={!isGrandFinal}>
        <SunSvg color={color} />
      </Match>
      <Match when={isGrandFinal}>
        <Square color={color} />
      </Match>
    </Switch>
  );
};

export default SunSquare;

const Square = styled.div<{ color: string }>`
  background-color: ${({ color }) => `var(--${color})`};
  width: 60%;
  height: 60%;
`;
