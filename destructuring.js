const person = {
  first: "Wes",
  last: "Bos",
  country: "Canada",
  city: "Hamilton",
  twitter: "@wesbos"
};

const { first, last } = person;
console.log(last);

const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
const numbers = ["1", "2", "3", "4"];
const [a, b, c, ...rest] = alphabet;
console.log(a);
console.log(c);
console.log(rest);
