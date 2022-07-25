export function createOneImageLayout(width, height, offsetX, offsetY) {
  let x = 0 + offsetX;
  let y = 0 + offsetY;

  let boxOnePosition = [x, y, 0];
  let boxOneScale = [0.8 * width + offsetX, 0.65 * height + offsetY, 1];
  return {
    boxOne: [boxOnePosition, boxOneScale],
  };
}

export function createTwoImagesLayout(width, height, offsetX, offsetY) {
  let x1 = 0.22 * width + offsetX;
  let y1 = 0 + offsetY;
  let boxOnePosition = [x1, y1, 0];
  let boxOneScale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];

  let x2 = -0.22 * width + offsetX;
  let y2 = 0 + offsetY;
  let boxTwoPosition = [x2, y2, 0];
  let boxTwoScale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];

  return {
    boxOne: [boxOnePosition, boxOneScale],
    boxTwo: [boxTwoPosition, boxTwoScale],
  };
}

export function createThreeImagesLayout(width, height, offsetX, offsetY) {
  let x1 = 0 + offsetX;
  let y1 = 0 + offsetY;
  let boxOnePosition = [x1, y1, 0];
  let boxOneScale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];

  let x2 = -width / 3 + offsetX;
  let y2 = 0 + offsetY;
  let boxTwoPosition = [x2, y2, 0];
  let boxTwoScale = [0.2 * width + offsetX, 0.4 * height + offsetY, 1];

  let x3 = width / 3 + offsetX;
  let y3 = 0 + offsetY;
  let boxThreePosition = [x3, y3, 0];
  let boxThreeScale = [0.2 * width + offsetX, 0.4 * height + offsetY, 1];

  return {
    boxOne: [boxOnePosition, boxOneScale],
    boxTwo: [boxTwoPosition, boxTwoScale],
    boxThree: [boxThreePosition, boxThreeScale],
  };
}

export function createFiveImagesLayout(width, height, offsetX, offsetY) {
  let x1 = 0 + offsetX;
  let y1 = 0 + offsetY;
  let boxOnePosition = [x1, y1, 0];
  let boxOneScale = [0.25 * width + offsetX, 0.45 * height + offsetY, 1];

  let x2 = -width / 4 + offsetX;
  let y2 = height / 5.5 + offsetY;
  let boxTwoPosition = [x2, y2, 0];
  let boxTwoScale = [0.2 * width + offsetX, 0.55 * height + offsetY, 1];

  let x3 = width / 4 + offsetX;
  let y3 = -height / 5.5 + offsetY;
  let boxThreePosition = [x3, y3, 0];
  let boxThreeScale = [0.2 * width + offsetX, 0.55 * height + offsetY, 1];

  let x4 = -width / 20 + offsetX;
  let y4 = height / 2.8 + offsetY;
  let boxFourPosition = [x4, y4, 0];
  let boxFourScale = [0.15 * width + offsetX, 0.2 * height + offsetY, 1];

  let x5 = width / 20 + offsetX;
  let y5 = -height / 2.8 + offsetY;
  let boxFivePosition = [x5, y5, 0];
  let boxFiveScale = [0.15 * width + offsetX, 0.2 * height + offsetY, 1];

  return {
    boxOne: [boxOnePosition, boxOneScale],
    boxTwo: [boxTwoPosition, boxTwoScale],
    boxThree: [boxThreePosition, boxThreeScale],
    boxFour: [boxFourPosition, boxFourScale],
    boxFive: [boxFivePosition, boxFiveScale],
  };
}

export function createSixImagesLayout(width, height, offsetX, offsetY) {
  let x1 = -width / 5.5 + offsetX;
  let y1 = height / 5 + offsetY;
  let boxOnePosition = [x1, y1, 0];
  let boxOneScale = [0.32 * width + offsetX, 0.4 * height + offsetY, 1];

  let x2 = width / 5.5 + offsetX;
  let y2 = -height / 5 + offsetY;
  let boxTwoPosition = [x2, y2, 0];
  let boxTwoScale = [0.32 * width + offsetX, 0.4 * height + offsetY, 1];

  let x3 = -width / 12 + offsetX;
  let y3 = -height / 7 + offsetY;
  let boxThreePosition = [x3, y3, 0];
  let boxThreeScale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];

  let x4 = -width / 4 + offsetX;
  let y4 = -height / 7 + offsetY;
  let boxFourPosition = [x4, y4, 0];
  let boxFourScale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];

  let x5 = width / 12 + offsetX;
  let y5 = height / 7 + offsetY;
  let boxFivePosition = [x5, y5, 0];
  let boxFiveScale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];

  let x6 = width / 4 + offsetX;
  let y6 = height / 7 + offsetY;
  let boxSixPosition = [x6, y6, 0];
  let boxSixScale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];

  return {
    boxOne: [boxOnePosition, boxOneScale],
    boxTwo: [boxTwoPosition, boxTwoScale],
    boxThree: [boxThreePosition, boxThreeScale],
    boxFour: [boxFourPosition, boxFourScale],
    boxFive: [boxFivePosition, boxFiveScale],
    boxSix: [boxSixPosition, boxSixScale],
  };
}

export function createEightImagesLayout(width, height, offsetX, offsetY) {
  let x1 = -0.375 * width + offsetX;
  let y1 = height / 5 + offsetY;
  let boxOnePosition = [x1, y1, 0];
  let boxOneScale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];

  let x2 = -0.375 * width + offsetX;
  let y2 = -height / 4 + offsetY;
  let boxTwoPosition = [x2, y2, 0];
  let boxTwoScale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];

  let x3 = -0.125 * width + offsetX;
  let y3 = height / 4 + offsetY;
  let boxThreePosition = [x3, y3, 0];
  let boxThreeScale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];

  let x4 = -0.125 * width + offsetX;
  let y4 = -height / 5 + offsetY;
  let boxFourPosition = [x4, y4, 0];
  let boxFourScale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];

  let x5 = 0.125 * width + offsetX;
  let y5 = height / 5 + offsetY;
  let boxFivePosition = [x5, y5, 0];
  let boxFiveScale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];

  let x6 = 0.125 * width + offsetX;
  let y6 = -height / 4 + offsetY;
  let boxSixPosition = [x6, y6, 0];
  let boxSixScale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];

  let x7 = 0.375 * width + offsetX;
  let y7 = height / 4 + offsetY;
  let boxSevenPosition = [x7, y7, 0];
  let boxSevenScale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];

  let x8 = 0.375 * width + offsetX;
  let y8 = -height / 5 + offsetY;
  let boxEightPosition = [x8, y8, 0];
  let boxEightScale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];

  return {
    boxOne: [boxOnePosition, boxOneScale],
    boxTwo: [boxTwoPosition, boxTwoScale],
    boxThree: [boxThreePosition, boxThreeScale],
    boxFour: [boxFourPosition, boxFourScale],
    boxFive: [boxFivePosition, boxFiveScale],
    boxSix: [boxSixPosition, boxSixScale],
    boxSeven: [boxSevenPosition, boxSevenScale],
    boxEight: [boxEightPosition, boxEightScale],
  };
}
