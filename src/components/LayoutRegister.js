import { shuffleArray } from "./AuxiliaryFunction";

export function createLayoutRegister(imgUrlsLength, layoutManagement) {
  let layoutRegister = [];
  const layoutArray = layoutManagement.reverse(); // Reverse the layout array so that the layout shows the most images at the top of the array

  // Find the amount of each layout type needed to show all images
  layoutArray.map(([key, value]) => {
    while (imgUrlsLength >= value) {
      imgUrlsLength -= value;
      layoutRegister.push([key, value]);
    }
  });

  // Shuffle the array layout
  shuffleArray(layoutRegister);
  return layoutRegister;
}
