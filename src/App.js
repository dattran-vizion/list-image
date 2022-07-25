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

import {
  createOneImageLayout,
  createTwoImagesLayout,
  createThreeImagesLayout,
  createFiveImagesLayout,
  createSixImagesLayout,
  createEightImagesLayout,
} from "./components/CreateLayout";
import { getRandomArbitrary } from "./components/AuxiliaryFunction";
import { createLayoutRegister } from "./components/LayoutRegister";

const sourceImageURLs = [
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
];

const sourceImgLength = sourceImageURLs.length;
const layoutManagement = {
  oneImageLayout: 1,
  twoImagesLayout: 2,
  threeImagesLayout: 3,
  fiveImagesLayout: 5,
  sixImagesLayout: 6,
  eightImagesLayout: 8,
};

function Images() {
  let copyImageURLs = [...sourceImageURLs];
  // console.log("render time", copyImageURLs.length);
  // Take the width and height of the screen
  const { width, height } = useThree((state) => state.viewport);

  // Create a random offset for the position of the images and their scale of them
  let offsetX = getRandomArbitrary(-width / 75, width / 75);
  let offsetY = getRandomArbitrary(-height / 75, height / 75);

  // Create layout register array
  const layoutsRegister = createLayoutRegister(
    sourceImgLength,
    layoutManagement
  );

  // Create the layout images. Example: Layout 1 has 1 iamges, Layout 2 has 2 images, etc.
  const layoutList = layoutsRegister.map(([layoutName, numOfImgInLayout]) => {
    let images = copyImageURLs
      .sort(() => 0.5 - Math.random())
      .slice(0, numOfImgInLayout);
    copyImageURLs = copyImageURLs.filter((image) => !images.includes(image));
    switch (layoutName) {
      case "oneImageLayout":
        const oneImageLayout = createOneImageLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: oneImageLayout };
      case "twoImagesLayout":
        const twoImagesLayout = createTwoImagesLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: twoImagesLayout };
      case "threeImagesLayout":
        const threeImagesLayout = createThreeImagesLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: threeImagesLayout };
      case "fiveImagesLayout":
        const fiveImagesLayout = createFiveImagesLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: fiveImagesLayout };
      case "sixImagesLayout":
        const sixImagesLayout = createSixImagesLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: sixImagesLayout };
      case "eightImagesLayout":
        const eightImagesLayout = createEightImagesLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: eightImagesLayout };
      default:
        return null;
    }
  });

  return (
    <group>
      {layoutList.map(({ images, layout }, index) => {
        let layoutValues = Object.values(layout);
        return (
          <group key={index}>
            {images.map((image, subIndex) => {
              let [x, y, z] = layoutValues[subIndex][0];
              let scale = layoutValues[subIndex][1];
              return (
                <Image
                  key={subIndex}
                  url={image}
                  position={[x, y - index * height, z]}
                  scale={scale}
                />
              );
            })}
          </group>
        );
      })}
    </group>
  );
}

export default function App() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={4} pages={5}>
          <Scroll>
            <Images />
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
      {/* <axesHelper args={[2, 2, 2]} position={[1, 1, 1]} /> */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
