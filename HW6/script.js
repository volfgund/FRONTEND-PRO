//1.
function maxNumber() {
    console.log(Math.max(3,7));  
}
maxNumber()

//2.
function checkAge(age) {
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}
const result = checkAge(15);
console.log(result)

//3.
function cutString(str,maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "…";
    } else {
        return str; 
    }
}    
const result1 = cutString('123456789',4)
console.log(result1);

//4.
function checkWord() {
    const str = 'maximum free width';
    console.log(str.includes('free'));
}
checkWord()