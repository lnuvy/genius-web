import React from "react";
import styled from "styled-components";
import { uesVersionContext } from "../context/version-context";
import Show from "@/components/utils/show";
import Switch from "@/components/utils/switch";
import Match from "@/components/utils/match";

interface BlockProps {
  shapeId?: number;
  colorId?: number;
  bgId?: number;
}

const Block = (props: BlockProps) => {
  const { shapeId, colorId, bgId } = props;
  const { isGrandFinal } = uesVersionContext();

  return (
    <Frame>
      <Switch>
        <Match when={isGrandFinal}>123123</Match>
        <Match when={!isGrandFinal}>asdfasdfafsd</Match>
      </Switch>
    </Frame>
  );
};

export default Block;

const Frame = styled.div`
  background-color: blue;
  border: 1px solid #fff;
`;
