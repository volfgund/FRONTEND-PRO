const number = +prompt ('Enter a number between 0 and 3', '');

switch (number) {
  case 0:
    alert('You entered the number 0');
    break;
  case 1:
    alert('You entered the number 1');
    break;
  case 2:
  case 3:
    alert('You entered the number 2 or 3');
    break;
  default:
    alert('Please enter a number between 0 and 3.');
}