import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useState } from "react";
import { TIME_OF_TURN } from "../constant";
import { settingBoard } from "../algorithm";

interface GameContext {
  round: number;
  boards: any[]; // any check
  // answers: any[]; // any check
  // isLoading: boolean;
}

const { ContextProvider, useContext } = createDynamicContext<GameContext>();

export const uesGameContext = useContext;

interface GameContextProvider {
  children: JSX.Element;
}

/**
 *
 */
const GameProvider = ({ children }: GameContextProvider) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [timer, setTimer] = useState(TIME_OF_TURN);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const nextRound = () => setCurrentRound((prev) => prev + 1);

  const boards = settingBoard();

  return (
    <ContextProvider round={currentRound} boards={boards}>
      {children}
    </ContextProvider>
  );
};

export default GameProvider;
