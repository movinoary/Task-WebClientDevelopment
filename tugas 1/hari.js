export const hariJS = (startInput, endDate) => {
  const startDate = startInput || new Date("2025-02-20");
  const endDate = endDate || new Date("2025-02-25");

  let betweenDate = endDate.getTime() - startDate.getTime();
  betweenDate = betweenDate / (1000 * 3600 * 24);

  return betweenDate;
};
