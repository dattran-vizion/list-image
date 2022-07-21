import { Suspense, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image,
  OrbitControls,
} from "@react-three/drei";
// import { AxesHelper } from "three";

const imageURLs = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
  "/img13.jpg",
  "/img14.jpg",
  "/img15.jpg",
  "/img16.jpg",
];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirstLayout(width, height, offsetX, offsetY) {
  let x = 0 + offsetX;
  let y = 0 + offsetY;

  let box1Position = [x, y, 0];
  let box1Scale = [0.8 * width + offsetX, 0.65 * height + offsetY, 1];
  let box1 = [box1Position, box1Scale];
  return { box1 };
}

function createSecondLayout(width, height, offsetX, offsetY) {
  let x1 = 0.22 * width + offsetX;
  let y1 = 0 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];
  let box1 = [box1Position, box1Scale];

  let x2 = -0.22 * width + offsetX;
  let y2 = 0 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];
  let box2 = [box2Position, box2Scale];

  return {
    box1,
    box2,
  };
}

function createThirdLayout(width, height, offsetX, offsetY) {
  let x1 = 0 + offsetX;
  let y1 = 0 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.34 * width + offsetX, 0.8 * height + offsetY, 1];
  let box1 = [box1Position, box1Scale];

  let x2 = -width / 3 + offsetX;
  let y2 = 0 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.2 * width + offsetX, 0.4 * height + offsetY, 1];
  let box2 = [box2Position, box2Scale];

  let x3 = width / 3 + offsetX;
  let y3 = 0 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.2 * width + offsetX, 0.4 * height + offsetY, 1];
  let box3 = [box3Position, box3Scale];

  return {
    box1,
    box2,
    box3,
  };
}

function createFourthLayout(width, height, offsetX, offsetY) {
  let x1 = 0 + offsetX;
  let y1 = 0 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.25 * width + offsetX, 0.45 * height + offsetY, 1];
  let box1 = [box1Position, box1Scale];

  let x2 = -width / 4 + offsetX;
  let y2 = height / 5.5 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.2 * width + offsetX, 0.55 * height + offsetY, 1];
  let box2 = [box2Position, box2Scale];

  let x3 = width / 4 + offsetX;
  let y3 = -height / 5.5 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.2 * width + offsetX, 0.55 * height + offsetY, 1];
  let box3 = [box3Position, box3Scale];

  let x4 = -width / 20 + offsetX;
  let y4 = height / 2.8 + offsetY;
  let box4Position = [x4, y4, 0];
  let box4Scale = [0.15 * width + offsetX, 0.2 * height + offsetY, 1];
  let box4 = [box4Position, box4Scale];

  let x5 = width / 20 + offsetX;
  let y5 = -height / 2.8 + offsetY;
  let box5Position = [x5, y5, 0];
  let box5Scale = [0.15 * width + offsetX, 0.2 * height + offsetY, 1];
  let box5 = [box5Position, box5Scale];

  return {
    box1,
    box2,
    box3,
    box4,
    box5,
  };
}

function createFifthLayout(width, height, offsetX, offsetY) {
  let x1 = -width / 5.5 + offsetX;
  let y1 = height / 5 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.32 * width + offsetX, 0.4 * height + offsetY, 1];
  let box1 = [box1Position, box1Scale];

  let x2 = width / 5.5 + offsetX;
  let y2 = -height / 5 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.32 * width + offsetX, 0.4 * height + offsetY, 1];
  let box2 = [box2Position, box2Scale];

  let x3 = -width / 12 + offsetX;
  let y3 = -height / 7 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  let box3 = [box3Position, box3Scale];

  let x4 = -width / 4 + offsetX;
  let y4 = -height / 7 + offsetY;
  let box4Position = [x4, y4, 0];
  let box4Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  let box4 = [box4Position, box4Scale];

  let x5 = width / 12 + offsetX;
  let y5 = height / 7 + offsetY;
  let box5Position = [x5, y5, 0];
  let box5Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  let box5 = [box5Position, box5Scale];

  let x6 = width / 4 + offsetX;
  let y6 = height / 7 + offsetY;
  let box6Position = [x6, y6, 0];
  let box6Scale = [0.15 * width + offsetX, 0.22 * height + offsetY, 1];
  let box6 = [box6Position, box6Scale];

  return {
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
  };
}

function createSixthLayout(width, height, offsetX, offsetY) {
  let x1 = -0.375 * width + offsetX;
  let y1 = height / 5 + offsetY;
  let box1Position = [x1, y1, 0];
  let box1Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  let box1 = [box1Position, box1Scale];

  let x2 = -0.375 * width + offsetX;
  let y2 = -height / 4 + offsetY;
  let box2Position = [x2, y2, 0];
  let box2Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  let box2 = [box2Position, box2Scale];

  let x3 = -0.125 * width + offsetX;
  let y3 = height / 4 + offsetY;
  let box3Position = [x3, y3, 0];
  let box3Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  let box3 = [box3Position, box3Scale];

  let x4 = -0.125 * width + offsetX;
  let y4 = -height / 5 + offsetY;
  let box4Position = [x4, y4, 0];
  let box4Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  let box4 = [box4Position, box4Scale];

  let x5 = 0.125 * width + offsetX;
  let y5 = height / 5 + offsetY;
  let box5Position = [x5, y5, 0];
  let box5Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  let box5 = [box5Position, box5Scale];

  let x6 = 0.125 * width + offsetX;
  let y6 = -height / 4 + offsetY;
  let box6Position = [x6, y6, 0];
  let box6Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  let box6 = [box6Position, box6Scale];

  let x7 = 0.375 * width + offsetX;
  let y7 = height / 4 + offsetY;
  let box7Position = [x7, y7, 0];
  let box7Scale = [0.2 * width + offsetX, 0.35 * height + offsetY, 1];
  let box7 = [box7Position, box7Scale];

  let x8 = 0.375 * width + offsetX;
  let y8 = -height / 5 + offsetY;
  let box8Position = [x8, y8, 0];
  let box8Scale = [0.2 * width + offsetX, 0.45 * height + offsetY, 1];
  let box8 = [box8Position, box8Scale];

  return {
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
  };
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

function createLayoutRegister(imgUrlsLength, layoutManagement) {
  let layoutRegister = [];
  const layoutEntries = Object.entries(layoutManagement); // Convert layoutManagement object to array, [key, value]
  const layoutArray = layoutEntries.reverse(); // Reverse the layout array so that the layout shows the most images at the top of the array

  // Find the amount of each layout type needed to show all images
  layoutArray.map(([key, value]) => {
    while (imgUrlsLength >= value) {
      imgUrlsLength -= value;
      layoutRegister.push([key, value]);
      // layoutRegister.push(key);
    }
  });
  // Shuffle the array layout
  shuffleArray(layoutRegister);
  return layoutRegister;
}

// function chooseImagesForLayout(arrImages, numOfImages) {
//   const imagesArr = arrImages;
//   const shuffledImagesArr = imagesArr.sort(() => 0.5 - Math.random()); // Shuffle the images
//   const images = shuffledImagesArr.slice(0, numOfImages); // Take the images from the shuffled array
//   const imagesRemaining = imagesArr.filter((image) => !images.includes(image)); // Find the remaining images );
//   return {  imagesRemaining };
// }

const imgUrlsLength = imageURLs.length;
const layoutManagement = {
  firstLayout: 1,
  secondLayout: 2,
  thirdLayout: 3,
  fourthLayout: 5,
  fifthLayout: 6,
  sixthLayout: 8,
};
let copyImageURLs = [...imageURLs];

function Images() {
  // Take the width and height of the screen
  const { width, height } = useThree((state) => state.viewport);

  // Create a random offset for the position of the images and their scale of them
  let offsetX = getRandomArbitrary(-width / 50, width / 50);
  let offsetY = getRandomArbitrary(-height / 50, height / 50);

  // Create layout register array
  const layoutRegister = createLayoutRegister(imgUrlsLength, layoutManagement);
  // console.log(layoutRegister);

  // Create the layout images
  const layoutReg = layoutRegister.map(([key]) => {
    switch (key) {
      case "firstLayout":
        const firstLayout = createFirstLayout(width, height, offsetX, offsetY);
        return { layout: firstLayout };
      case "secondLayout":
        const secondLayout = createSecondLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { layout: secondLayout };
      case "thirdLayout":
        const thirdLayout = createThirdLayout(width, height, offsetX, offsetY);
        return { layout: thirdLayout };
      case "fourthLayout":
        const fourthLayout = createFourthLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { layout: fourthLayout };
      case "fifthLayout":
        const fifthLayout = createFifthLayout(width, height, offsetX, offsetY);
        return { layout: fifthLayout };
      case "sixthLayout":
        const sixthLayout = createSixthLayout(width, height, offsetX, offsetY);
        return { layout: sixthLayout };
      default:
        return null;
    }
  });

  const layoutImages = layoutRegister.map(([value]) => {
    let images = copyImageURLs.sort(() => 0.5 - Math.random()).slice(0, value);
    copyImageURLs = copyImageURLs.filter((image) => !images.includes(image));
    return images;
  });
  console.log(layoutImages);

  console.log(layoutReg);

  return (
    <group>
      <Image url={imageURLs[0]} position={[0, 0, 0]} scale={[1.5, 1.5, 1]} />
      {/* {layoutImages.map(({ layout }) => {
        console.log(layout);
        console.log(images);
      })} */}
    </group>
  );
}

export default function App() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={4} pages={3}>
          <Scroll>
            <Images />
          </Scroll>
        </ScrollControls>
        {/* <Preload /> */}
      </Suspense>
      {/* <axesHelper args={[2, 2, 2]} position={[1, 1, 1]} />
      <OrbitControls /> */}
    </Canvas>
  );
}
