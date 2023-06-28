import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useEffect, useState } from "react";
import { getAnswers, settingBoard } from "../algorithm";

interface GameContext {
  round: number;
  boards: any[]; // any check
  answers: any[]; // any check
  // isLoading: boolean;
  isBoardTouch: boolean;
  toggleSubmitMode: () => void;
}

const { ContextProvider, useContext } = createDynamicContext<GameContext>();

export const useGameContext = useContext;

interface GameContextProvider {
  children: JSX.Element;
}

/**
 *
 */
const GameProvider = ({ children }: GameContextProvider) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [boards, setBoards] = useState<any>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputMode, setIsInputMode] = useState(false);

  // TODO: 보드 초기화 조건 추가
  useEffect(() => {
    const getBoard = settingBoard();
    setBoards(getBoard);

    const getAnswer = getAnswers(getBoard);
    setAnswers(getAnswer);
  }, []);

  const toggleSubmitMode = () => setIsInputMode((prev) => !prev);

  const nextRound = () => setCurrentRound((prev) => prev + 1);

  if (!boards) return <>Loading...</>;

  return (
    <ContextProvider
      isBoardTouch={isInputMode}
      toggleSubmitMode={toggleSubmitMode}
      round={currentRound}
      boards={boards}
      answers={answers}
    >
      {children}
    </ContextProvider>
  );
};

export default GameProvider;
