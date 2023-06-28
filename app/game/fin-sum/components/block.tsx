import React from "react";
import styled from "styled-components";
import { uesVersionContext } from "../context/version-context";
import StarSvg from "../svg/star";
import MoonSvg from "../svg/moon";
import SunSvg from "../svg/sun";
import { Match, Switch } from "@/components/utils";
import { BgsType, ColorsType, ShapeType } from "../algorithm";
import SunSquare from "./icon/sun-square";
import MoonTriangle from "./icon/moon-triangle";
import StarCircle from "./icon/star-circle";
import Typo from "@/components/atoms/typo";
import { useGameContext } from "../context/game-context";
import { useTurnContext } from "../context/turn-context";

interface BlockProps {
  numbering: number;
  shape: ShapeType;
  color: ColorsType;
  bg: BgsType;

  isSubmit?: boolean;
}

const Block = (props: BlockProps) => {
  const { shape, color, bg, numbering, isSubmit } = props;
  const { isGrandFinal } = uesVersionContext();
  const { isBoardTouch } = useGameContext();
  const { setAnswer } = useTurnContext();

  return (
    <Frame
      bg={bg.bg}
      disabled={!isBoardTouch}
      onClick={() => setAnswer(numbering)}
    >
      <Numbering bg={bg.bg}>
        <Typo size={10} letterSpacing="0.5rem" textAlign="center">
          {numbering}
        </Typo>
      </Numbering>
      <Switch>
        <Match when={shape.id === 1}>
          <IconWrapper>
            <StarCircle colorId={color.id} />
          </IconWrapper>
        </Match>
        <Match when={shape.id === 2}>
          <IconWrapper>
            <MoonTriangle colorId={color.id} />
          </IconWrapper>
        </Match>
        <Match when={shape.id === 3}>
          <IconWrapper>
            <SunSquare colorId={color.id} />
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

const Frame = styled.button<{ bg: string }>`
  position: relative;
  background-color: ${({ bg }) => bg};
  border: 1px solid var(--line-300);
  max-width: calc(100vw / 3);
  max-height: calc(100vw / 3);
`;

const Numbering = styled.div<{ bg: string }>`
  position: absolute;
  left: 0;
  top: 0;
  border-right: 1px solid var(--icon-basic);
  border-bottom: 1px solid var(--icon-basic);
  color: ${({ bg }) => (bg === "black" ? "#fff" : "#000")};
  font-family: sans-serif;
`;

const IconWrapper = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
`;
