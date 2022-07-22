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
  createFirstLayout,
  createSecondLayout,
  createThirdLayout,
  createFourthLayout,
  createFifthLayout,
  createSixthLayout,
} from "./components/CreateLayout";
import {
  getRandomArbitrary,
  pickRandomImagesFromURLs,
} from "./components/AuxiliaryFunction";
import { createLayoutRegister } from "./components/LayoutRegister";

const imageURLs = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/trip1.jpg",
  "/trip2.jpg",
  "/trip3.jpg",
  "/trip4.jpg",
];

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
  const layoutList = layoutRegister.map(([key, value]) => {
    let images = pickRandomImagesFromURLs(copyImageURLs, value);
    switch (key) {
      case "firstLayout":
        const firstLayout = createFirstLayout(width, height, offsetX, offsetY);
        return { images, layout: firstLayout };
      case "secondLayout":
        const secondLayout = createSecondLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: secondLayout };
      case "thirdLayout":
        const thirdLayout = createThirdLayout(width, height, offsetX, offsetY);
        return { images, layout: thirdLayout };
      case "fourthLayout":
        const fourthLayout = createFourthLayout(
          width,
          height,
          offsetX,
          offsetY
        );
        return { images, layout: fourthLayout };
      case "fifthLayout":
        const fifthLayout = createFifthLayout(width, height, offsetX, offsetY);
        return { images, layout: fifthLayout };
      case "sixthLayout":
        const sixthLayout = createSixthLayout(width, height, offsetX, offsetY);
        return { images, layout: sixthLayout };
      default:
        return { images: undefined, layout: [] };
    }
  });

  // const listLayoutRender = layoutList.map((item, index) => {
  //   const images = item.images;
  //   const layout = Object.values(item.layout);
  //   return { images, layout };
  // });

  const images = layoutList[0].images;
  const firstLayout = Object.values(layoutList[0].layout);

  return (
    <group>
      {images.map((image, index) => (
        <Image
          key={index}
          url={image}
          position={firstLayout[index][0]}
          // position={Math.random()}
          scale={firstLayout[index][1]}
          // scale={Math.random()}
        />
      ))}
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
        <Preload />
      </Suspense>
      {/* <axesHelper args={[2, 2, 2]} position={[1, 1, 1]} /> */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
