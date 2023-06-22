const shapes = ["star", "moon", "sun"];
const colors = ["purple", "green", "red"];
const bgs = ["white", "grey", "black"];

const getRandomElement = (array: string[]) => {
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

  return boards;
};

export const getAnswers = (boards: any) => {};
