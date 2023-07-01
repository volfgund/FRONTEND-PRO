const str = prompt('free string');
const maxlength = prompt('maximum line length');

let result;

if (str.length > maxlength) {
    result = str.slice(0, maxlength) + "…";
} else {
    result = str; 
}

console.log(result);