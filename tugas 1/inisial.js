export const inisialJS = (fullnameInput) => {
  let fullName = fullnameInput || "Vino Arystio";
  const resutlName = fullName.split(" ");
  let results = [];

  for (let i = 0; i < resutlName.length; i++) {
    let initial = resutlName[i].split("");
    initial = initial[0];
    results.push(initial);
  }

  results = results.join("");
  return results;
};
