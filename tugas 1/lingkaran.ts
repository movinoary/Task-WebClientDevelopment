export const lingkatanJS = (
  radiusInput: number
): {
  diameterT: number;
  circumferenceT: number;
  areaT: number;
} => {
  const radiusT: number = radiusInput || 5;

  const diameterT: number = radiusT * 2; // hasil: 10
  let circumferenceT: number = 2 * (22 / 7) * radiusT; // hasil: 31.428571428571427
  let areaT: number = (22 / 7) * radiusT * radiusT; // hasil: 78.57142857142857

  return {
    diameterT,
    circumferenceT,
    areaT,
  };
};
