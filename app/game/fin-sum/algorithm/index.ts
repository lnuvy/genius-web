export type ShapeType = { id: number; shape1: string; shape2: string };
export type ColorsType = { id: number; color1: string; color2: string };
export type BgsType = { id: number; bg: string };

// 결!합! 사용되는 상수
const shapes = [
  { id: 1, shape1: "star", shape2: "circle" },
  { id: 2, shape1: "moon", shape2: "triangle" },
  { id: 3, shape1: "sun", shape2: "square" },
];

const colors = [
  { id: 1, color1: "purple", color2: "blue" },
  { id: 2, color1: "green", color2: "yellow" },
  { id: 3, color1: "red", color2: "red" },
];
const bgs = [
  { id: 1, bg: "white" },
  { id: 2, bg: "grey" },
  { id: 3, bg: "black" },
];

/** ------------------------------------------------------------------------------
 * 
 * 보드를 만들어내는 함수
 * 
 ------------------------------------------------------------------------------ */
const getRandomElement = <T>(array: T[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const settingBoard = () => {
  let boards = [];

  for (let i = 0; i < 9; i++) {
    let obj = {
      shape: getRandomElement(shapes),
      color: getRandomElement(colors),
      bg: getRandomElement(bgs),
    };

    while (
      boards.filter((item: any) => item.shape === obj.shape).length >= 4 ||
      boards.filter((item: any) => item.color === obj.color).length >= 4 ||
      boards.filter((item: any) => item.bg === obj.bg).length >= 4
    ) {
      obj = {
        shape: getRandomElement(shapes),
        color: getRandomElement(colors),
        bg: getRandomElement(bgs),
      };
    }

    boards.push(obj);
  }

  console.log("boards", boards);

  return boards;
};

type IsMeetCondition = (props: string, i: any, j: any, k: any) => boolean;

/** ------------------------------------------------------------------------------
 * 
 * 합! 의 조건이 되지 판단하는 함수
 * 
 ------------------------------------------------------------------------------ */
const isMeetCondition: IsMeetCondition = (props, i, j, k) => {
  const sum = i[props].id + j[props].id + k[props].id;
  return sum % 3 === 0;
};

/** ------------------------------------------------------------------------------
 * 
 * 합! 정답들 미리 구하는 함수
 * 
 ------------------------------------------------------------------------------ */
export const getAnswers = (boards: any) => {
  const answers = [];

  for (let i = 0; i < boards.length - 2; i++) {
    for (let j = i + 1; j < boards.length - 1; j++) {
      for (let k = j + 1; k < boards.length; k++) {
        if (isMeetCondition("shape", boards[i], boards[j], boards[k]))
          if (isMeetCondition("color", boards[i], boards[j], boards[k]))
            if (isMeetCondition("bg", boards[i], boards[j], boards[k]))
              answers.push([i + 1, j + 1, k + 1]);
      }
    }
  }
  console.log("answers", answers);
  return answers;
};

/** ------------------------------------------------------------------------------
 * 
 * 블록의 Theme
 * 
 ------------------------------------------------------------------------------ */
export const getColorFromGrandFinal = (colorId: number) => {
  switch (colorId) {
    case 1:
      return "purple";
    case 2:
      return "green";
    case 3:
      return "red";
    default:
      return "";
  }
};

export const getColorFromOne = (colorId: number) => {
  switch (colorId) {
    case 1:
      return "blue";
    case 2:
      return "yellow";
    case 3:
      return "red";
    default:
      return "";
  }
};

type CompareAnswer = (
  answer: number[][],
  userInput: number[]
) => [boolean, number];
/** ------------------------------------------------------------------------------
 * 
 * user의 인풋값이 정답인지 판단하기
 * @returns [정답/오답 여부(boolean), 정답리스트의 index]
 * 
 ------------------------------------------------------------------------------ */
export const compareAnswer: CompareAnswer = (answer, userInput) => {
  const user = userInput.sort().join();

  for (let i = 0; i < answer.length; i++) {
    const sort = answer[i].sort().join();

    if (sort === user) {
      return [true, i];
    }
  }

  return [false, -1];
};
