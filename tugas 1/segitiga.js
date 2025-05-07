export const segitiga = (anglesOneInput, anglesTwoInput) => {
  const anglesOne = anglesOneInput || 80;
  const anglesTwo = anglesTwoInput || 65;

  const triangle = 180 - (anglesOne + anglesTwo);
  return triangle;
};
