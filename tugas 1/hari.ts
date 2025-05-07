export const hariTS = (startDate: Date, endDate: Date): number => {
  const startT: Date = startDate || new Date("2025-02-20");
  const endT: Date = endDate || new Date("2025-02-25");

  let daysBetween: number =
    (endT.getTime() - startT.getTime()) / (1000 * 3600 * 24);
  return daysBetween;
};
