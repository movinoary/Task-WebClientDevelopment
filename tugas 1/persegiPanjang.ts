export const persegiPanjang = (
  lengthInput: number,
  heightInput: number
): number => {
  let lengthT: number = lengthInput || 5;
  let heightT: number = heightInput || 3;

  let totalAreaT: number = lengthT * heightT; // hasil : 15
  return totalAreaT;
};
