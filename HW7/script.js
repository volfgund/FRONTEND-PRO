//1.
const maxNumber = (a,b) => console.log(Math.max(a,b));
  
maxNumber(3,8);

//2.
const checkAge = (age) => age > 18;
    
const result = checkAge(16);
console.log(result);

//3.
const cutString = (str,maxlength) => str.slice(0, maxlength) + "…";
    
const result1 = cutString('123456789',4);
console.log(result1);

//4.
const checkWord = () => {
    const str = 'maximum free width';
    console.log(str.includes('free'));
}

checkWord();