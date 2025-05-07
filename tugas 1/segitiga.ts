export const segitiga = (
  anglesOneInput: number,
  anglesTwoInput: number
): number => {
  const anglesOneT: number = anglesOneInput || 80;
  const anglesTwoT: number = anglesTwoInput || 65;

  const triangleT: number = 180 - (anglesOneT + anglesTwoT);
  return triangleT;
};
