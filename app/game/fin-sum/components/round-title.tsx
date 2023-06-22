import Typo from "@/components/atoms/typo";
import React from "react";
import styled from "styled-components";

interface RoundTitleProps {}

const RoundTitle = (props: RoundTitleProps) => {
  const {} = props;

  return (
    <Frame>
      <Typo>{1} ROUND</Typo>
    </Frame>
  );
};

export default RoundTitle;

const Frame = styled.div``;
