export const inisialTs = (fullnameInput: string): string => {
  const nameFull: string = fullnameInput || "Vino Arystio";
  const resultName: string[] = nameFull.split(" ");
  let result: string[] = [];

  for (let i = 0; i < resultName.length; i++) {
    const initial: string = resultName[i][0];
    result.push(initial);
  }

  const initials: string = result.join("");
  console.log(initials);
  return initials;
};
