import React from "react";
import styled from "styled-components";
import { uesVersionContext } from "../context/version-context";
import StarSvg from "../svg/star";
import MoonSvg from "../svg/moon";
import SunSvg from "../svg/sun";
import { Match, Switch } from "@/components/utils";

interface BlockProps {
  shape: string;
  color: string;
  bg: string;
}

const Block = (props: BlockProps) => {
  const { shape, color, bg } = props;
  const { isGrandFinal } = uesVersionContext();

  return (
    <Frame {...props}>
      <Switch>
        <Match when={shape === "star"}>
          <IconWrapper>
            <StarSvg color={color} />
          </IconWrapper>
        </Match>
        <Match when={shape === "moon"}>
          <IconWrapper>
            <MoonSvg color={color} />
          </IconWrapper>
        </Match>
        <Match when={shape === "sun"}>
          <IconWrapper>
            <SunSvg color={color} />
          </IconWrapper>
        </Match>
      </Switch>
      {/* <Switch>
        <Match when={isGrandFinal}>123123</Match>
        <Match when={!isGrandFinal}>asdfasdfafsd</Match>
      </Switch> */}
    </Frame>
  );
};

export default Block;

const Frame = styled.div<BlockProps>`
  background-color: ${({ bg }) => bg};
  border: 1px solid var(--line-300);
  max-width: calc(100vw / 3);
  max-height: calc(100vw / 3);
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
