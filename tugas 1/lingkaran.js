export const lingkatanJS = (radiusInput) => {
  const radius = radiusInput || 5;

  const diameter = radius * 2;
  let circumference = 2 * (22 / 7) * radius;
  let area = (22 / 7) * radius * radius;

  return {
    diameter,
    circumference,
    area,
  };
};
