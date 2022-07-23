export function createFirstLayout(width, height, offsetX, offsetY) {
  let x = 0 + offsetX;
  let y = 0 + offsetY;

  let box1Position = [x, y, 0];
  let box1Scale = [0.8 * width + offsetX, 0.65 * height + offsetY, 1];
  // let box1 = [box1Position, box1Scale];
  return {
    // box1Position, box1Scale
    box1: [box1Position, box1Scale],
  };
}

export function createSecondLayout(width, height, offsetX, offsetY) {
  let x1 = 0.22 * width + offsetX;
  let y1 = 0 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];
  // let box1 = [box1Position, box1Scale];

  let x2 = -0.22 * width + offsetX;
  let y2 = 0 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];
  // let box2 = [box2Position, box2Scale];

  return {
    // box1Position,
    // box1Scale,
    // box2Position,
    // box2Scale,
    box1: [box1Position, box1Scale],
    box2: [box2Position, box2Scale],
  };
}

export function createThirdLayout(width, height, offsetX, offsetY) {
  let x1 = 0 + offsetX;
  let y1 = 0 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];
  // let box1 = [box1Position, box1Scale];

  let x2 = -width / 3 + offsetX;
  let y2 = 0 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.2 * width + offsetX, 0.4 * height + offsetY, 1];
  // let box2 = [box2Position, box2Scale];

  let x3 = width / 3 + offsetX;
  let y3 = 0 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.2 * width + offsetX, 0.4 * height + offsetY, 1];
  // let box3 = [box3Position, box3Scale];

  return {
    // box1Position,
    // box1Scale,
    // box2Position,
    // box2Scale,
    box1: [box1Position, box1Scale],
    box2: [box2Position, box2Scale],
    box3: [box3Position, box3Scale],
  };
}

export function createFourthLayout(width, height, offsetX, offsetY) {
  let x1 = 0 + offsetX;
  let y1 = 0 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.25 * width + offsetX, 0.45 * height + offsetY, 1];
  // let box1 = [box1Position, box1Scale];

  let x2 = -width / 4 + offsetX;
  let y2 = height / 5.5 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.2 * width + offsetX, 0.55 * height + offsetY, 1];
  // let box2 = [box2Position, box2Scale];

  let x3 = width / 4 + offsetX;
  let y3 = -height / 5.5 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.2 * width + offsetX, 0.55 * height + offsetY, 1];
  // let box3 = [box3Position, box3Scale];

  let x4 = -width / 20 + offsetX;
  let y4 = height / 2.8 + offsetY;
  let box4Position = [x4, y4, 0];
  let box4Scale = [0.15 * width + offsetX, 0.2 * height + offsetY, 1];
  // let box4 = [box4Position, box4Scale];

  let x5 = width / 20 + offsetX;
  let y5 = -height / 2.8 + offsetY;
  let box5Position = [x5, y5, 0];
  let box5Scale = [0.15 * width + offsetX, 0.2 * height + offsetY, 1];
  // let box5 = [box5Position, box5Scale];

  return {
    // box1Position,
    // box1Scale,
    // box2Position,
    // box2Scale,
    // box3Position,
    // box3Scale,
    // box4Position,
    // box4Scale,
    // box5Position,
    // box5Scale,
    box1: [box1Position, box1Scale],
    box2: [box2Position, box2Scale],
    box3: [box3Position, box3Scale],
    box4: [box4Position, box4Scale],
    box5: [box5Position, box5Scale],
  };
}

export function createFifthLayout(width, height, offsetX, offsetY) {
  let x1 = -width / 5.5 + offsetX;
  let y1 = height / 5 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.32 * width + offsetX, 0.4 * height + offsetY, 1];
  // let box1 = [box1Position, box1Scale];

  let x2 = width / 5.5 + offsetX;
  let y2 = -height / 5 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.32 * width + offsetX, 0.4 * height + offsetY, 1];
  // let box2 = [box2Position, box2Scale];

  let x3 = -width / 12 + offsetX;
  let y3 = -height / 7 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  // let box3 = [box3Position, box3Scale];

  let x4 = -width / 4 + offsetX;
  let y4 = -height / 7 + offsetY;
  let box4Position = [x4, y4, 0];
  let box4Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  // let box4 = [box4Position, box4Scale];

  let x5 = width / 12 + offsetX;
  let y5 = height / 7 + offsetY;
  let box5Position = [x5, y5, 0];
  let box5Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  // let box5 = [box5Position, box5Scale];

  let x6 = width / 4 + offsetX;
  let y6 = height / 7 + offsetY;
  let box6Position = [x6, y6, 0];
  let box6Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  // let box6 = [box6Position, box6Scale];

  return {
    // box1Position,
    // box1Scale,
    // box2Position,
    // box2Scale,
    // box3Position,
    // box3Scale,
    // box4Position,
    // box4Scale,
    // box5Position,
    // box5Scale,
    // box6Position,
    // box6Scale,
    box1: [box1Position, box1Scale],
    box2: [box2Position, box2Scale],
    box3: [box3Position, box3Scale],
    box4: [box4Position, box4Scale],
    box5: [box5Position, box5Scale],
    box6: [box6Position, box6Scale],
  };
}

export function createSixthLayout(width, height, offsetX, offsetY) {
  let x1 = -0.375 * width + offsetX;
  let y1 = height / 5 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  // let box1 = [box1Position, box1Scale];

  let x2 = -0.375 * width + offsetX;
  let y2 = -height / 4 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  // let box2 = [box2Position, box2Scale];

  let x3 = -0.125 * width + offsetX;
  let y3 = height / 4 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  // let box3 = [box3Position, box3Scale];

  let x4 = -0.125 * width + offsetX;
  let y4 = -height / 5 + offsetY;
  let box4Position = [x4, y4, 0];
  let box4Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  // let box4 = [box4Position, box4Scale];

  let x5 = 0.125 * width + offsetX;
  let y5 = height / 5 + offsetY;
  let box5Position = [x5, y5, 0];
  let box5Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  // let box5 = [box5Position, box5Scale];

  let x6 = 0.125 * width + offsetX;
  let y6 = -height / 4 + offsetY;
  let box6Position = [x6, y6, 0];
  let box6Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  // let box6 = [box6Position, box6Scale];

  let x7 = 0.375 * width + offsetX;
  let y7 = height / 4 + offsetY;
  let box7Position = [x7, y7, 0];
  let box7Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  // let box7 = [box7Position, box7Scale];

  let x8 = 0.375 * width + offsetX;
  let y8 = -height / 5 + offsetY;
  let box8Position = [x8, y8, 0];
  let box8Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  // let box8 = [box8Position, box8Scale];

  return {
    // box1Position,
    // box1Scale,
    // box2Position,
    // box2Scale,
    // box3Position,
    // box3Scale,
    // box4Position,
    // box4Scale,
    // box5Position,
    // box5Scale,
    // box6Position,
    // box6Scale,
    // box7Position,
    // box7Scale,
    // box8Position,
    // box8Scale,

    box1: [box1Position, box1Scale],
    box2: [box2Position, box2Scale],
    box3: [box3Position, box3Scale],
    box4: [box4Position, box4Scale],
    box5: [box5Position, box5Scale],
    box6: [box6Position, box6Scale],
    box7: [box7Position, box7Scale],
    box8: [box8Position, box8Scale],
  };
}
