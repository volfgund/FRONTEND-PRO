const number = (list) => {
  return list.map((str, index) => `${index + 1}: ${str}`);
};

const strings = ["a", "b", "c"];
const result = number(strings);
console.log(result);