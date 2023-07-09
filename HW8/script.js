const usersNames = ['user', 'user1', 'user10', 'user100', 'user1000']

//1.
const callback = (item) => console.log(item);
  
usersNames.forEach(callback);

//1.1.
const callback1 = (item) => console.log(item.length);
  
usersNames.forEach(callback1);

//2.
const findUser = (usersNames, user10) => usersNames.includes('user10');

const result = findUser('user10');
console.log(result)

//3.
const result1 = usersNames.find((item) => item.length > 4);

console.log(result1);

//4.
const result2 = usersNames.filter((item) => item.length > 3);

console.log(result2);