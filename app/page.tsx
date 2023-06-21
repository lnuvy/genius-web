"use client";

import GameTitle from "@/components/molecules/game-title";
import localFont from "next/font/local";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <GameTitle />

      <p
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        DeathMatch
      </p>
    </main>
  );
}

const TestDiv = styled.div`
  background-color: red;
`;
