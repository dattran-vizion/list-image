export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function pickRandomImagesFromURLs(imageURLs, value) {
  let images = imageURLs.sort(() => 0.5 - Math.random()).slice(0, value);
  imageURLs = imageURLs.filter((image) => !images.includes(image));
  return images;
}
