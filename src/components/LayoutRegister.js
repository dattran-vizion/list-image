import { shuffleArray } from "./AuxiliaryFunction";

export function createLayoutRegister(imgUrlsLength, layoutManagement) {
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
