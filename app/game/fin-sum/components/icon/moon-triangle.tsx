import Match from "@/components/utils/match";
import Switch from "@/components/utils/switch";
import React from "react";
import styled from "styled-components";
import { uesVersionContext } from "../../context/version-context";
import MoonSvg from "../../svg/moon";
import { IconsProps } from "./star-circle";
import { getColorFromGrandFinal, getColorFromOne } from "../../algorithm";

const MoonTriangle = (props: IconsProps) => {
  const { colorId } = props;
  const { isGrandFinal } = uesVersionContext();

  const color = isGrandFinal
    ? getColorFromGrandFinal(colorId)
    : getColorFromOne(colorId);

  return (
    <Switch>
      <Match when={isGrandFinal}>
        <MoonSvg color={color} />
      </Match>
      <Match when={!isGrandFinal}>
        <Triangle color={color} />
      </Match>
    </Switch>
  );
};

export default MoonTriangle;

const Triangle = styled.div<{ color: string }>`
  width: 70%;
  height: 50%;

  background-color: ${({ color }) => `var(--${color})`};

  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;
