

export function createLayoutList(layoutRegister) {
  const layoutReg = layoutRegister.map(([key, value]) => {
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
  return layoutReg;
}
