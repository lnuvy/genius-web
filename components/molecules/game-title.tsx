import React from "react";
import styled from "styled-components";

const GameTitle = () => {
  return <Wrapper className="yulyeo">GameTitle</Wrapper>;
};

export default GameTitle;

const Top = styled.div``;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: linear-gradient(to bottom, #55473a, #201b17);
  border: 1px solid #000;
  box-shadow: 5px 5px 0px 0px #fff, 10px 10px 0px 0px #000;
`;
