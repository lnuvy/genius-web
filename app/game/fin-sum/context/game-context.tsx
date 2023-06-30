import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useEffect, useState } from "react";
import { getAnswers, settingBoard } from "../algorithm";
import { ROUND_START_TIME } from "../constant";

interface GameContext {
  roundStart: boolean;
  waitingTime: number;
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
  // 보드 보여주기 전 시간
  const [roundStart, setRoundStart] = useState(false);
  const [waitingTime, setWaitingTime] = useState(ROUND_START_TIME);

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

  const nextRound = () => {
    setCurrentRound((prev) => prev + 1);
  };

  // 대기시간 타이머
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWaitingTime((prev) => {
        // 0이되면 시작
        if (prev === 0) {
          setRoundStart(true);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!boards) return <>Loading...</>;

  return (
    <ContextProvider
      roundStart={roundStart}
      waitingTime={waitingTime}
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
