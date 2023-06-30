import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useEffect, useState } from "react";
import { compareAnswer, getAnswers, settingBoard } from "../algorithm";
import { ROUND_START_TIME, TIME_OF_RESULT } from "../constant";
import { useScoreContext } from "./score-context";

interface GameContext {
  isStart: boolean;
  isGuide: boolean;
  waitingTime: number;
  round: number;
  boards: any[]; // any check
  answers: any[]; // any check
  alreadyAnswers: any[]; // any check
  isBoardTouch: boolean;
  toggleSubmitMode: () => void;
  checkAnswer: (userAnswer: number[]) => void;
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
  const { changeScore } = useScoreContext();

  // 보드 보여주기 전 시간
  const [isStart, setIsStart] = useState(false);
  const [waitingTime, setWaitingTime] = useState(ROUND_START_TIME);

  // 정/오답 안내
  const [isGuide, setIsGuide] = useState(false);

  const [currentRound, setCurrentRound] = useState(1);
  const [boards, setBoards] = useState<any>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [alreadyAnswers, setAlreadyAnswers] = useState<any>([]);
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
          roundStart();
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log("clear!");
      clearInterval(intervalId);
    };
  }, []);

  const roundStart = () => {
    setIsStart(true);
  };

  const roundEnd = () => {};

  // 정/오답인지 확인하기
  const checkAnswer = (userAnswer: number[]) => {
    // 안내모드
    setIsGuide(true);

    setTimeout(() => {
      setIsGuide(false);
      setIsInputMode(false);
    }, TIME_OF_RESULT);

    // 비교
    const [isAnswer, index] = compareAnswer(answers, userAnswer);

    // 정답
    if (isAnswer) {
      correct합(index);
    }
    // 오답
    else wrong합();
  };

  useEffect(() => {
    console.log("isGuide", isGuide);
  }, [isGuide]);

  // 합! 정답
  const correct합 = (answersIndex: number) => {
    changeScore(1);
    setAlreadyAnswers((prev: any) => [...prev, answers[answersIndex]]);
    setAnswers((prev: any) => {
      const updatedAnswers = [...prev];
      updatedAnswers.splice(answersIndex, 1);
      return updatedAnswers;
    });
  };

  const wrong합 = () => {
    changeScore(-1);
  };

  // if (!boards) return <>Loading...</>;

  return (
    <ContextProvider
      isStart={isStart}
      isGuide={isGuide}
      waitingTime={waitingTime}
      isBoardTouch={isInputMode}
      toggleSubmitMode={toggleSubmitMode}
      round={currentRound}
      boards={boards}
      answers={answers}
      alreadyAnswers={[]}
      checkAnswer={checkAnswer}
    >
      {children}
    </ContextProvider>
  );
};

export default GameProvider;
