import { shuffleArray } from "./AuxiliaryFunction";

export function createLayoutRegister(imgUrlsLength, layoutManagement) {
  let layoutRegister = [];
  const layoutEntries = Object.entries(layoutManagement); // Convert layoutManagement object to array, [layoutName, numOfImgInLayout]
  const layoutArray = layoutEntries.reverse(); // Reverse the layout array so that the layout shows the most images at the top of the array

  // Find the amount of each layout type needed to show all images
  layoutArray.map(([layoutName, numOfImgInLayout]) => {
    while (imgUrlsLength >= numOfImgInLayout) {
      imgUrlsLength -= numOfImgInLayout;
      layoutRegister.push([layoutName, numOfImgInLayout]);
    }
    return layoutRegister;
  });

  // Shuffle the array layout
  shuffleArray(layoutRegister);
  return layoutRegister;
}
