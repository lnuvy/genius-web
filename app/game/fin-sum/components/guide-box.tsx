import React from "react";
import styled from "styled-components";
import { useGameContext } from "../context/game-context";
import { Show } from "@/components/utils";
import Typo from "@/components/atoms/typo";

interface GuideBoxProps {}

const GuideBox = (props: GuideBoxProps) => {
  const { isGuide } = useGameContext();

  return (
    <Frame>
      <Show when={!!isGuide}>
        <Typo size={16}>{isGuide}</Typo>
      </Show>
    </Frame>
  );
};

export default GuideBox;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
