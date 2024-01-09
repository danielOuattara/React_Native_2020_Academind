//----
export const generateRandomBetween = (min, max, exclude) => {
  /*
   * this function generate a random number between min included and max excluded
   * exclude: to avoid that the computer could guess the correct number on 1st launch
   **/

  let randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randNum;
};
