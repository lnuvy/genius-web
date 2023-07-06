import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useEffect, useState } from "react";
import { compareAnswer, getAnswers, settingBoard } from "../algorithm";
import { ROUND_START_TIME, TIME_OF_RESULT } from "../constant";
import { useScoreContext } from "./score-context";

interface GameContext {
  isStart: boolean;
  isGuide: IsGuideType;
  waitingTime: number;
  round: number;
  boards: any[]; // any check
  answers: any[]; // any check
  alreadyAnswers: any[]; // any check
  isBoardTouch: boolean;
  toggleSubmitMode: () => void;
  checkAnswer: (userAnswer: number[]) => void;
  guideModeToggle: (msg: IsGuideType) => void;
  onClickKiyul: () => void;
}

const { ContextProvider, useContext } = createDynamicContext<GameContext>();

export const useGameContext = useContext;

interface GameContextProvider {
  children: JSX.Element;
}

type IsGuideType = "" | "시간초과" | "정답" | "오답";

/**
 *
 */
const GameProvider = ({ children }: GameContextProvider) => {
  const { changeScore } = useScoreContext();

  // 보드 보여주기 전 시간
  const [isStart, setIsStart] = useState(false);
  const [waitingTime, setWaitingTime] = useState(ROUND_START_TIME);

  // 정/오답, 시간초과 안내
  const [isGuide, setIsGuide] = useState<IsGuideType>("");

  const [currentRound, setCurrentRound] = useState(1);
  const [boards, setBoards] = useState<any>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [alreadyAnswers, setAlreadyAnswers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputMode, setIsInputMode] = useState(false);

  // TODO: 보드 초기화 조건 추가
  useEffect(() => {
    console.log("isStart", isStart);
    const getBoard = settingBoard();
    setBoards(getBoard);
    const getAnswer = getAnswers(getBoard);
    setAnswers(getAnswer);
  }, [isStart]);

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
      clearInterval(intervalId);
    };
  }, [isStart]);

  const guideModeToggle = (msg: IsGuideType) => {
    // 안내모드
    setIsGuide(msg);

    setTimeout(() => {
      setIsGuide("");
      setIsInputMode(false);
    }, TIME_OF_RESULT);
  };

  const roundStart = () => {
    setIsStart(true);
  };

  const roundEnd = () => {};

  // 합 정/오답인지 확인하기
  const checkAnswer = (userAnswer: number[]) => {
    // 비교
    const [isAnswer, index] = compareAnswer(answers, userAnswer);

    // 정답
    if (isAnswer) correct합(index);
    // 오답
    else wrong결합();
  };

  // 결 정/오답 확인
  const onClickKiyul = () => {
    // 오답
    if (answers.length) wrong결합();
    else correct결();
  };

  const roundInit = () => {
    setIsStart(false);
  };

  // 결! 정답
  const correct결 = () => {
    changeScore(3);
    guideModeToggle("정답");

    setWaitingTime(ROUND_START_TIME);
    setTimeout(() => roundInit(), ROUND_START_TIME);
  };

  // 합! 정답
  const correct합 = (answersIndex: number) => {
    changeScore(1);
    setAlreadyAnswers((prev: any) => [...prev, answers[answersIndex]]);
    setAnswers((prev: any) => {
      const updatedAnswers = [...prev];
      updatedAnswers.splice(answersIndex, 1);
      return updatedAnswers;
    });
    guideModeToggle("정답");
  };

  const wrong결합 = () => {
    guideModeToggle("오답");
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
      guideModeToggle={guideModeToggle}
      onClickKiyul={onClickKiyul}
    >
      {children}
    </ContextProvider>
  );
};

export default GameProvider;
