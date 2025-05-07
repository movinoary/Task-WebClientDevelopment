const stringT: string = "madam";
const reversedT: string = stringT.split("").reverse().join("");

if (stringT === reversedT) {
  console.log(true);
} else if (stringT !== reversedT) {
  console.log(false);
}
